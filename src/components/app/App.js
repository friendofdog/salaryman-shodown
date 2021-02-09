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
  const URL = process.env.SERVER_URL || `${LOCAL}:${PORT}`

  const [player1, setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc"));
  const [player2, setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def"));
  const [round, setRound] = useState("");
  const [creation, setCreation] = useState(true);
  const [redistrubite, setRedistribute] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [roundWinner, setRoundWinner] = useState("");

  useEffect(() => {
    socketRef.current = socketIOClient(URL);

    socketRef.current.on("confirm", () => {
      console.log("socketid", socketRef.current.id);
    });

    socketRef.current.on("reject", () => {
      throw new Error("Too many players");
    });

    socketRef.current.on("setCreation", data => {
      console.log("setCreation", data);
      setCreation(data);
    });

    socketRef.current.on("setRedistribute", data => {
      console.log("setRedistribute", data);
      setRedistribute(data);
    });
  }, []);

  return (
    <div className="application">
      <header className="title-wrapper">
        <Title />
      </header>
      {gameover ? <Gameover winner={roundWinner} /> : creation || redistrubite ? (
        <section>
          <PointDist 
            creation={creation}
            player={{...player1}}
            onChange={(e) => {
              updateProps({...player1}, setPlayer1, e.target.name, e.target.value);
            }}
            onSubmit={(e) => {
              e.preventDefault();
              socketRef.current.emit("setCreation", false);
              socketRef.current.emit("setRedistribute", false);
              setRound("");
              setRoundWinner("");
            }}
            redistribute={redistrubite}
          />
        </section>
      ) : (
        <>
          <section className="arena-wrapper">
            <Arena 
              player1={player1}
              player2={player2}
            />
          </section>
          <section className="round-wrapper">
            <Round
              getRandStat={() => {
                const stat = getRandStat(salarymanStats);
                const [winner, loser] = handleRound({...player1}, {...player2}, setPlayer1, setPlayer2, stat);
                setRoundWinner(winner);
                setRound(stat);
                if (winner && loser) {
                  setTimeout(() => {
                    checkGameover(loser, setGameover);
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
