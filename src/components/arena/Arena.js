import React from "react";

import { Div, H2, Image } from "../styled";

import Salaryman from "../salaryman/Salaryman";
import salaryman1 from "../../img/salaryman1.jpg";
import salaryman2 from "../../img/salaryman2.jpg";

const Arena = (props) => {
  const { player1, player2, user } = props;

  const activePlayer = [player1, player2].filter((p) => {
    return p.id === user;
  });

  return (
    <Div>
      <H2 arena>You are: {activePlayer[0].name}</H2>
      <Div salarymanWrapper>
        <Salaryman player={player1} user={user} />
        <Image alt="Player 1 salaryman" src={salaryman1} />
        <Image alt="Player 2 salaryman" src={salaryman2} />
        <Salaryman player={player2} user={user} />
      </Div>
    </Div>
  );
};

export default Arena;
