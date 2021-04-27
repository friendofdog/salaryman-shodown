import React from "react";
import styled from "styled-components";

import { CentredP, Image, Section } from "../styled";

import Player from "../player/Player";
import { Salaryman } from "../../classes";
import salaryman1 from "../../img/salaryman1.jpg";
import salaryman2 from "../../img/salaryman2.jpg";

const SalarymanWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

type ArenaProps = {
  player1: Salaryman;
  player2: Salaryman;
  user: string;
};

const Arena: React.FC<ArenaProps> = ({
  player1,
  player2,
  user,
}: ArenaProps) => {
  const activePlayer = [player1, player2].filter((p) => {
    return p.id === user;
  });

  return (
    <Section>
      <CentredP>You are: {activePlayer[0].name}</CentredP>
      <SalarymanWrapper>
        <Player player={player1} user={user} />
        <Image alt="Player 1 salaryman" src={salaryman1} />
        <Image alt="Player 2 salaryman" src={salaryman2} />
        <Player player={player2} user={user} />
      </SalarymanWrapper>
    </Section>
  );
};

export default Arena;
