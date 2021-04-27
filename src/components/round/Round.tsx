import React from "react";
import styled from "styled-components";
import { Salaryman } from "../../classes";

import { CentredP, Div, Image, Section } from "../styled";

import startButton from "../../img/start.png";

type RoundProps = {
  handleRound: () => void;
  round: string;
  winner?: Salaryman;
};

const RoundContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Round: React.FC<RoundProps> = ({ handleRound, round, winner }) => {
  return (
    <Section>
      <RoundContainer>
        <Div>
          {!winner && (
            <Image
              cursor="pointer"
              alt="Start a round"
              src={startButton}
              onClick={handleRound}
            />
          )}

          {round && winner && (
            <CentredP fontSize="2" marginTop="0">
              {round}
            </CentredP>
          )}

          {round && (
            <CentredP>
              {(winner && `${winner.name} wins the round!`) || "Draw!"}
            </CentredP>
          )}
        </Div>
      </RoundContainer>
    </Section>
  );
};

export default Round;
