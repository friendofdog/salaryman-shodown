import React from "react";

import "./Round.css";

const Round = (props) => {
  const {
    getRandStat,
    round 
  } = props;

  return (
    <div className="round">
      <button
        onClick={getRandStat}>
          Start!
      </button>
      <p>{round}</p>
    </div>
  );
}

export default Round;
