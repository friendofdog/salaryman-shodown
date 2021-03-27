import React from "react";

import { Div, P } from "../styled";

const Gameover = (props) => {
  const { winner } = props;

  return (
    <Div>
      <P gameWinner>{winner.name} wins the game!</P>
    </Div>
  );
};

export default Gameover;
