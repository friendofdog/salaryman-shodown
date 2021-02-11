import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

import {
  checkGameover,
  getRandStat,
  handleRound,
  updateProps,
  salarymanStats,
  verifyInit
} from "../../utils";

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
  
  const state = {};

  [state.user, state.setUser] = useState();
  [state.player1, state.setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc", P1));
  [state.player2, state.setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def", P2));
  [state.round, state.setRound] = useState("");
  [state.creation, state.setCreation] = useState(true);
  [state.redistrubite, state.setRedistribute] = useState(false);
  [state.gameover, state.setGameover] = useState(false);
  [state.roundWinner, state.setRoundWinner] = useState("");

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL);

    socketRef.current.on("confirm", data => {
      if (data === 1) state.setUser(P1);
      else state.setUser(P2);
    });

    socketRef.current.on("reject", () => {
      throw new Error("Too many players");
    });

    socketRef.current.on("state", (callback, data=null) => {
      state[callback](data);
    });
  }, []);

  return (
    <div className={state.creation || state.redistrubite ? "point-dist application" : "arena application"}>
      <header className="title-wrapper">
        <Title 
          showImg={!state.creation && !state.redistrubite}
        />
      </header>
      {state.gameover ? <Gameover winner={state.roundWinner} /> : state.creation || state.redistrubite ? (
        <section>
          <PointDist 
            creation={state.creation}
            player={state.user === P1 ? {...state.player1} : {...state.player2}}
            onChange={(e) => {
              updateProps(
                state.user === P1 ? {...state.player1} : {...state.player2},
                state.user === P1 ? state.setPlayer1 : state.setPlayer2,
                e.target.name,
                e.target.value
              );
            }}
            onSubmit={ async (e) => {
              e.preventDefault();
              await socketRef.current.emit(
                "state",
                state.user === P1 ? "setPlayer1" : "setPlayer2",
                state.user === P1 ? {...state.player1} : {...state.player2}
              )
              await verifyInit("setGameInit", socketRef);
            }}
            redistribute={state.redistrubite}
            winner={state.roundWinner}
            user={state.user}
          />
        </section>
      ) : (
        <>
          <section className="arena-wrapper">
            <Arena 
              player1={state.player1}
              player2={state.player2}
              user={state.user}
            />
          </section>
          <section className="round-wrapper">
            <Round
              getRandStat={() => {
                const stat = getRandStat(salarymanStats);
                const [winner, loser] = handleRound({...state.player1}, {...state.player2}, stat, socketRef);
                socketRef.current.emit("state", "setRoundWinner", winner);
                socketRef.current.emit("state", "setRound", stat);

                if (winner && loser) {
                  setTimeout(() => {
                    checkGameover(loser, socketRef, "setGameover");
                    socketRef.current.emit("state", "setRedistribute", true);
                  }, 2000);
                }
              }}
              round={state.round}
              winner={state.roundWinner}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
