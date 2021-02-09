import React from "react";

import "./Arena.css";
import Salaryman from "../salaryman/Salaryman";

const Arena = (props) => {
  const {
    player1,
    player2,
    user
  } = props;

  const activePlayer = [player1, player2].filter(p => {
    return p.id === user;
  });

  return (
    <div className="arena">
      <h2>Salaryman arena</h2>
      <h3>You are: {activePlayer[0].name}</h3>
      <div className="salaryman-wrapper">
        <Salaryman player={player1} user={user} />
        <Salaryman player={player2} user={user} />
      </div>
    </div>
  );
}

export default Arena;
