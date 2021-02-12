import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

import {
  handleRound,
  handlePointDistChange,
  handlePointDistSubmit,
  initialiseGame,
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
  const LOCAL = process.env.LOCAL || "http://127.0.0.1";
  const SERVER_URL = process.env.REACT_APP_URL || `${LOCAL}:${PORT}`;

  const P1 = "player1";
  const P2 = "player2";

  const state = {};

  [state.user, state.setUser] = useState();
  [state.player1, state.setPlayer1] = useState(
    new Salaryman("Yoshiro", "Chief Director", "Abc", P1),
  );
  [state.player2, state.setPlayer2] = useState(
    new Salaryman("Yoshitaka", "Cybersecurity Head", "Def", P2),
  );
  [state.round, state.setRound] = useState("");
  [state.creation, state.setCreation] = useState(true);
  [state.redistrubite, state.setRedistribute] = useState(false);
  [state.gameover, state.setGameover] = useState(false);
  [state.roundWinner, state.setRoundWinner] = useState("");
  [state.gameInit, state.setGameInit] = useState([]);

  useEffect(() => {
    socketRef.current = socketIOClient(SERVER_URL);

    socketRef.current.on("confirm", (data) => {
      if (data === 1) state.setUser(P1);
      else state.setUser(P2);
    });

    socketRef.current.on("reject", () => {
      throw new Error("Too many players");
    });

    socketRef.current.on("state", (callback, data = null) => {
      state[callback](data);
    });
  }, []);

  useEffect(() => {
    initialiseGame(socketRef, state.gameInit);
  }, [state.gameInit]);

  return (
    <div
      className={
        state.creation || state.redistrubite
          ? "application"
          : "application arena"
      }
    >
      <Title showImg={!state.creation && !state.redistrubite} />

      {state.gameover ? (
        <Gameover winner={state.roundWinner} />
      ) : state.creation || state.redistrubite ? (
        <PointDist
          creation={state.creation}
          player={
            state.user === P1 ? { ...state.player1 } : { ...state.player2 }
          }
          onChange={(e) => {
            handlePointDistChange(e.target.name, e.target.value, state, P1);
          }}
          onSubmit={(e) => {
            handlePointDistSubmit(e, socketRef, state, P1);
          }}
          redistribute={state.redistrubite}
          winner={state.roundWinner}
          user={state.user}
        />
      ) : (
        <>
          <Arena
            player1={state.player1}
            player2={state.player2}
            user={state.user}
          />
          <Round
            handleRound={() => handleRound(state, socketRef)}
            round={state.round}
            winner={state.roundWinner}
          />
        </>
      )}
    </div>
  );
};

export default App;
