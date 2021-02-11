import React from "react";

import "./Round.css";
import startButton from "../../img/start.png";

const Round = (props) => {
  const {
    handleRound,
    round,
    winner
  } = props;

  return (
    <div className="round">
      <div>
        {round && winner ? (
          <>
            <p className="winning-stat">{round}</p>
            <p className="outcome">{winner.name} wins the round!</p>
          </>
        ) : round ? (
          <>
            <img className="round-start" alt="start a round" src={startButton} onClick={handleRound} />
            <p className="outcome">Draw!</p>
          </>
        ) : ( 
          <img className="round-start" alt="start a round" src={startButton} onClick={handleRound} />
        )}
    </div>
   </div>
  );
}

export default Round;
