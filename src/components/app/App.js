import React, { useState } from "react";

import { getRandStat, setStats, salarymanStats } from "../../utils";
import { Salaryman } from "../../classes";

import Arena from "../arena/Arena";
import Round from "../round/Round";
import PointDist from "../point_dist/PointDist";
import Title from "../title/Title";
import "./App.css";

const App = () => {
  const [player1, setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc"));
  const [player2, setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def"));
  const [round, setRound] = useState("");
  const [creation, setCreation] = useState(true);

  return (
    <div className="application">
      <header className="title-wrapper">
        <Title />
      </header>
      <section>
        <PointDist 
          player={{...player1}}
          onChange={(e) => {
            setStats({...player1}, setPlayer1, e.target.name, e.target.value);
          }}
        />
      </section>
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
            setRound(stat);
          }}
          round={round}
        />
      </section>
    </div>
  );
}

export default App;
