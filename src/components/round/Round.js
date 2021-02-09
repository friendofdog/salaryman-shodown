import React from "react";

import "./Round.css";

const Round = (props) => {
  const {
    getRandStat,
    round,
    winner
  } = props;

  return (
    <div className="round">
      {round && winner ? (
        <>
          <p>{round}</p>
          <p>{winner.name || "no one"} wins the round!</p>
        </>
      ) : round ? (
        <>
          <p>{winner.name || "no one"} wins the round!</p>
          <button
            onClick={getRandStat}>
              Start!
          </button>
        </>
      ) : ( 
        <button
          onClick={getRandStat}>
            Start!
        </button>
      )}
   </div>
  );
}

export default Round;
