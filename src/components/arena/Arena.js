import React from "react";

const Arena = (props) => {
  const {
    player1, player2
  } = props;

  return (
    <div>
      <div>{player1}</div>
      <div>{player2}</div>
    </div>
  );
}

export default Arena;
