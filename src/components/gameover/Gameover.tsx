import React from "react";
import { Salaryman } from "../../classes";

import { Div, CentredP } from "../styled";

type GameoverProps = {
  winner: Salaryman;
};

const Gameover: React.FC<GameoverProps> = ({ winner }) => {
  return (
    <Div>
      <CentredP>{winner.name} wins the game!</CentredP>
    </Div>
  );
};

export default Gameover;
