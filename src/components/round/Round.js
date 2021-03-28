import React from "react";
import styled from "styled-components";

import { CentredP, Div, Section } from "../styled";

import startButton from "../../img/start.png";

const RoundContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const RoundStart = styled.img`
  cursor: pointer;
`;

const Round = (props) => {
  const { handleRound, round, winner } = props;

  return (
    <Section>
      <RoundContainer>
        <Div>
          {!winner && (
            <RoundStart
              className="round-start"
              alt="start a round"
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
              {(winner.name && `${winner.name} wins the round!`) || "Draw!"}
            </CentredP>
          )}
        </Div>
      </RoundContainer>
    </Section>
  );
};

export default Round;
