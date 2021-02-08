import React, { useState } from "react";

import Arena from "../arena/Arena";
import Round from "../round/Round";
import PointDist from "../point_dist/PointDist";
import Title from "../title/Title";
import "./App.css";

const App = () => {
  class Salaryman {
    constructor(name, title, company) {
      this.stats = {
        conformity: { name: "conformity", val: 5 },
        loyalty: { name: "loyalty", val: 5 },
        karaoke: { name: "karaoke skill", val: 5 },
        mucus: { name: "mucus production", val: 5 },
        senority: { name: "senority", val: 5 },
        sobriety: { name: "sobriety", val: 5 }
      }
      this.name = name;
      this.title = title;
      this.company = company;
      this.points = 10;
      this.cp = 10;
    }
  }

  const salarymanStats = [
    "conformity",
    "loyalty",
    "karaoke",
    "mucus",
    "senority",
    "sobriety"
  ];

  const getRandStat = (stats) => {
    const keys = Object.keys(stats);
    return stats[keys[ keys.length * Math.random() << 0]];
  }

  const setStats = (player, callback, key, val) => {
    const stat = player.stats[key]
    const prev = stat.val;
    stat.val = parseInt(val);
    player.points = prev > stat.val ? player.points + 1 : player.points - 1;
    callback(player);
  }

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
