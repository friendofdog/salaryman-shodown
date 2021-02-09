import React, { useState } from "react";

import { checkGameover, getRandStat, handleRound, updateProps, salarymanStats } from "../../utils";
import { Salaryman } from "../../classes";

import Arena from "../arena/Arena";
import Gameover from "../gameover/Gameover";
import Round from "../round/Round";
import PointDist from "../point_dist/PointDist";
import Title from "../title/Title";
import "./App.css";

const App = () => {
  const [player1, setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc"));
  const [player2, setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def"));
  const [round, setRound] = useState("");
  const [creation, setCreation] = useState(true);
  const [redistrubite, setRedistribute] = useState(false);
  const [gameover, setGameover] = useState(false);
  const [roundWinner, setRoundWinner] = useState("");

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
              setCreation(false);
              setRedistribute(false);
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
                    setRedistribute(true);
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
