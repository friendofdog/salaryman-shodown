import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

import styled from "styled-components";

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

const ApplicationContainer = styled.main((props) => ({
  height: "100%",
  backgroundColor: `${props.color || "#fff"}`,
}));

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
    new Salaryman("Yoshiro", "Chief Director", "Abc", P1)
  );
  [state.player2, state.setPlayer2] = useState(
    new Salaryman("Yoshitaka", "Cybersecurity Head", "Def", P2)
  );
  [state.round, state.setRound] = useState("");
  [state.creation, state.setCreation] = useState(true);
  [state.redistribute, state.setRedistribute] = useState(false);
  [state.gameover, state.setGameover] = useState(false);
  [state.roundWinner, state.setRoundWinner] = useState("");
  [state.gameInit, state.setGameInit] = useState([]);
  [state.redistInit, state.setRedistInit] = useState(false);
  [state.redistCountdown, state.setRedistCountdown] = useState(-1);

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

  useEffect(async () => {
    if (!state.creation && state.redistribute) {
      state.setRedistCountdown(10);
    }
  }, [state.redistribute]);

  useEffect(() => {
    if (!state.creation && state.redistribute) {
      if (state.redistCountdown > 0) {
        setTimeout(() => {
          const count = state.redistCountdown - 1;
          state.setRedistCountdown(count);
        }, 1000);
      } else {
        initialiseGame(socketRef, state.gameInit);
      }
    }
  }, [state.redistCountdown]);

  return (
    <ApplicationContainer
      color={(!state.creation && !state.redistribute && "brown") || "#fff"}
    >
      <Title showImg={!state.creation && !state.redistribute} />

      {state.gameover ? (
        <Gameover winner={state.roundWinner} />
      ) : state.creation || state.redistribute ? (
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
          redistribute={state.redistribute}
          redistCountdown={state.redistCountdown}
          redistInit={state.redistInit}
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
    </ApplicationContainer>
  );
};

export default App;
