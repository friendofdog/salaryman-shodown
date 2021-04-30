import React, { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

import styled from "styled-components";

import {
  closeModal,
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
import Instructions from "../instructions/Instructions";

const ApplicationContainer = styled.main((props) => ({
  height: "100%",
  backgroundColor: `${props.color || "#fff"}`,
}));

const App: React.FC = () => {
  const socketRef = useRef<Socket>();
  const PORT = process.env.PORT || 8080;
  const LOCAL = process.env.LOCAL || "http://127.0.0.1";
  const SERVER_URL = process.env.REACT_APP_URL || `${LOCAL}:${PORT}`;

  const P1 = "player1";
  const P2 = "player2";

  const [user, setUser] = useState<string>("");
  const [player1, setPlayer1] = useState<Salaryman>(
    new Salaryman("Yoshiro", "Chief Director", "Abc", P1)
  );
  const [player2, setPlayer2] = useState<Salaryman>(
    new Salaryman("Yoshitaka", "Cybersecurity Head", "Def", P2)
  );
  const [round, setRound] = useState<string>("");
  const [creation, setCreation] = useState<boolean>(true);
  const [redistribute, setRedistribute] = useState<boolean>(false);
  const [gameover, setGameover] = useState<boolean>(false);
  const [roundWinner, setRoundWinner] = useState<Salaryman>(new Salaryman());
  const [gameInit, setGameInit] = useState<number>(0);
  const [redistInit, setRedistInit] = useState<boolean>(false);
  const [redistCountdown, setRedistCountdown] = useState<number>(-1);
  const [modalClosed, setModalClosed] = useState<boolean>(false);

  useEffect(() => {
    socketRef.current = io(SERVER_URL);

    socketRef.current.on("confirm", (data: number) => {
      if (data === 1) setUser(P1);
      else setUser(P2);
    });

    socketRef.current.on("reject", () => {
      throw new Error("Too many players");
    });

    socketRef.current.on("setPlayer1", (player: Salaryman) => {
      setPlayer1(player);
    });

    socketRef.current.on("setPlayer2", (player: Salaryman) => {
      setPlayer2(player);
    });

    socketRef.current.on("setGameInit", (count: number) => {
      setGameInit(count);
    });

    socketRef.current.on("setCreation", (create: boolean) => {
      setCreation(create);
    });

    socketRef.current.on("setRedistribute", (redist: boolean) => {
      setRedistribute(redist);
    });

    socketRef.current.on("setRound", (char: string) => {
      setRound(char);
    });

    socketRef.current.on("setRoundWinner", (salaryman: Salaryman) => {
      setRoundWinner(salaryman);
    });

    socketRef.current.on("setRedistInit", (isInit: boolean) => {
      setRedistInit(isInit);
    });

    socketRef.current.on("setGameover", (gameover: boolean) => {
      setGameover(gameover);
    });
  }, []);

  useEffect(() => {
    initialiseGame(socketRef, gameInit);
  }, [gameInit]);

  useEffect(() => {
    if (!creation && redistribute) {
      (async () => {
        setRedistCountdown(10);
      })();
    }
  }, [redistribute]);

  useEffect(() => {
    if (!creation && redistribute) {
      if (redistCountdown > 0) {
        setTimeout(() => {
          const count = redistCountdown - 1;
          setRedistCountdown(count);
        }, 1000);
      } else {
        initialiseGame(socketRef, gameInit);
      }
    }
  }, [redistCountdown]);

  return (
    <ApplicationContainer
      color={(!creation && !redistribute && "brown") || "#fff"}
    >
      <Title showImg={!creation && !redistribute} />

      {gameover ? (
        <Gameover winner={roundWinner} />
      ) : creation || redistribute ? (
        <>
          <Instructions
            closed={modalClosed}
            closeModal={() => closeModal(setModalClosed)}
          />
          <PointDist
            creation={creation}
            player={user === P1 ? { ...player1 } : { ...player2 }}
            onChange={(e: {
              target: { name: keyof Salaryman["stats"]; value: string };
            }) => {
              handlePointDistChange(
                e.target.name,
                e.target.value,
                user === P1 ? { ...player1 } : { ...player2 },
                user === P1 ? setPlayer1 : setPlayer2,
                setRedistInit
              );
            }}
            onSubmit={(e: { preventDefault: () => {} }) => {
              handlePointDistSubmit(
                e,
                socketRef,
                user === P1 ? { ...player1 } : { ...player2 },
                user === P1 ? "setPlayer1" : "setPlayer2",
                gameInit
              );
            }}
            redistribute={redistribute}
            redistCountdown={redistCountdown}
            redistInit={redistInit}
            winner={roundWinner}
            user={user}
          />
        </>
      ) : (
        <>
          <Arena player1={player1} player2={player2} user={user} />
          <Round
            handleRound={() =>
              handleRound({ ...player1 }, { ...player2 }, socketRef)
            }
            round={round}
            winner={roundWinner}
          />
        </>
      )}
    </ApplicationContainer>
  );
};

export default App;
