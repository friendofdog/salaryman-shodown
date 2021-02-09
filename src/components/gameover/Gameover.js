import React from "react";

import "./Gameover.css";

const Gameover = (props) => {
  const { winner } = props;

  return (
    <div className="gameover">
      <p className="game-winner">
        {winner.name} wins the game!
      </p>
    </div>
  );
}

export default Gameover;
