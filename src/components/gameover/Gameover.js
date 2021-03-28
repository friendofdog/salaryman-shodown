import React from "react";

import { Div, CentredP } from "../styled";

const Gameover = (props) => {
  const { winner } = props;

  return (
    <Div>
      <CentredP>{winner.name} wins the game!</CentredP>
    </Div>
  );
};

export default Gameover;
