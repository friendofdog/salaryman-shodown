import React, { useState } from "react";

import Arena from "../arena/Arena";
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
      };
      this.name = name;
      this.title = title;
      this.company = company;
      this.points = 10;
      this.cp = 10;
    }
  }

  const [player1, setPlayer1] = useState(new Salaryman("Yoshiro", "Chief Director", "Abc"));
  const [player2, setPlayer2] = useState(new Salaryman("Yoshitaka", "Cybersecurity Head", "Def"));

  return (
    <div className="application">
      <header className="title-wrapper">
        <Title />
      </header>
      <section className="arena-wrapper">
        <Arena 
          player1={player1}
          player2={player2}
        />
      </section>
    </div>
  );
}

export default App;
