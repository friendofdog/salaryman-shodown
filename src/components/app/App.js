import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

import { checkGameover, getRandStat, handleRound, updateProps, salarymanStats } from "../../utils";
import { Salaryman } from "../../classes";

import Arena from "../arena/Arena";
import Gameover from "../gameover/Gameover";
import Round from "../round/Round";
import PointDist from "../point_dist/PointDist";
import Title from "../title/Title";
import "./App.css";

const App = () => {
  const socketRef = useRef();
  const PORT = process.env.PORT || 8080;
  const LOCAL = process.env.LOCAL || "http://127.0.0.1"
  const SERVER_URL = process.env.REACT_APP_URL || `${LOCAL}:${PORT}`

  const P1 = "player1";
  const P2 = "player2";

  const [user, setUser] = useState();
  const [player1, setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc", P1));
  const [player2, setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def", P2));
  const [round, setRound] = useState("");
  const [creation, setCreation] = useState(true);
  const [redistrubite, setRedistribute] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [roundWinner, setRoundWinner] = useState("");

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL);

    socketRef.current.on("confirm", data => {
      if (data === 1) setUser(P1);
      else setUser(P2);
    });

    socketRef.current.on("reject", () => {
      throw new Error("Too many players");
    });

    socketRef.current.on("setCreation", data => {
      setCreation(data);
    });

    socketRef.current.on("setRedistribute", data => {
      setRedistribute(data);
    });

    socketRef.current.on("setRoundWinner", data => {
      setRoundWinner(data);
    });

    socketRef.current.on("setRound", data => {
      setRound(data);
    });

    socketRef.current.on("setPlayer1", data => {
      setPlayer1(data);
    });

    socketRef.current.on("setPlayer2", data => {
      setPlayer2(data);
    });

    socketRef.current.on("setGameover", data => {
      setGameover(data);
    });
  }, []);

  return (
    <div className={creation || redistrubite ? "point-dist application" : "arena application"}>
      <header className="title-wrapper">
        <Title 
          showImg={!creation && !redistrubite}
        />
      </header>
      {gameover ? <Gameover winner={roundWinner} /> : creation || redistrubite ? (
        <section>
          <PointDist 
            creation={creation}
            player={user === P1 ? {...player1} : {...player2}}
            onChange={(e) => {
              updateProps(
                user === P1 ? {...player1} : {...player2},
                user === P1 ? "setPlayer1" : "setPlayer2",
                socketRef,
                e.target.name,
                e.target.value
              );
            }}
            onSubmit={(e) => {
              e.preventDefault();
              socketRef.current.emit("setCreation", false);
              socketRef.current.emit("setRedistribute", false);
              socketRef.current.emit("setRound", "");
              socketRef.current.emit("setRoundWinner", "");
            }}
            redistribute={redistrubite}
            winner={roundWinner}
            user={user}
          />
        </section>
      ) : (
        <>
          <section className="arena-wrapper">
            <Arena 
              player1={player1}
              player2={player2}
              user={user}
            />
          </section>
          <section className="round-wrapper">
            <Round
              getRandStat={() => {
                const stat = getRandStat(salarymanStats);
                const [winner, loser] = handleRound({...player1}, {...player2}, stat, socketRef);
                socketRef.current.emit("setRoundWinner", winner);
                socketRef.current.emit("setRound", stat);

                if (winner && loser) {
                  setTimeout(() => {
                    checkGameover(loser, socketRef, "setGameover");
                    socketRef.current.emit("setRedistribute", true);
                  }, 2000);
                }
              }}
              round={round}
              winner={roundWinner}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
