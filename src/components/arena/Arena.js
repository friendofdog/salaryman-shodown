import React from "react";

import "./Arena.css";
import Salaryman from "../salaryman/Salaryman";
import salaryman1 from "../../img/salaryman1.jpg";
import salaryman2 from "../../img/salaryman2.jpg";

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
      <h3>You are: {activePlayer[0].name}</h3>
      <div className="salaryman-wrapper">
        <Salaryman player={player1} user={user} />
        <img alt="Player 1 salaryman" src={salaryman1} />
        <img alt="Player 2 salaryman" src={salaryman2} />
        <Salaryman player={player2} user={user} />
      </div>
    </div>
  );
}

export default Arena;
