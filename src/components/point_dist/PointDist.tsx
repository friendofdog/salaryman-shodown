import React from "react";
import styled from "styled-components";

import { Salaryman } from "../../classes";
import { CentredP, Div, Form } from "../styled";
import InputBlock from "../styled/InputBlock";
import Personal from "./personal/Personal";
import Stats from "./stats/Stats";
import Wait from "./wait/Wait";

type PointDistProps = {
  creation: boolean;
  player: Salaryman;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
  redistCountdown: number;
  redistInit: boolean;
  redistribute: boolean;
  winner: Salaryman;
  user: string;
};

const PointDistContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem 3rem;
`;

const PointDist: React.FC<PointDistProps> = ({
  creation,
  player,
  onChange,
  onSubmit,
  redistCountdown,
  redistInit,
  redistribute,
  winner,
  user,
}) => {
  const roundWinner = winner.id === user;

  return (
    <PointDistContainer>
      {roundWinner ? (
        <Wait />
      ) : (
        <Form onChange={onChange} onSubmit={onSubmit}>
          {creation ? (
            <Personal />
          ) : (
            <Div>
              <CentredP color="#000" fontSize="1">
                Redistribute a point?
              </CentredP>
              <CentredP color="#000" fontSize="1">
                Optional: choose ONE point to redistrubute!
              </CentredP>
              <CentredP color="#000" fontSize="1">
                Time remaining: {redistCountdown}
              </CentredP>
            </Div>
          )}
          <Stats
            player={player}
            redistribute={redistribute}
            redistInit={redistInit}
          />
          <InputBlock
            type="submit"
            value="Start"
            disabled={player.points > 0}
          />
        </Form>
      )}
    </PointDistContainer>
  );
};

export default PointDist;
