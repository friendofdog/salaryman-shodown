import React from "react";

import "./Arena.css";
import Salaryman from "../salaryman/Salaryman";

const Arena = (props) => {
  const {
    player1, player2
  } = props;

  return (
    <div className="arena">
      <h2>Salaryman arena</h2>
      <div className="salaryman-wrapper">
        <Salaryman player={player1} />
        <Salaryman player={player2} />
      </div>
    </div>
  );
}

export default Arena;
