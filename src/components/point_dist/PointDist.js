import React from "react";

import { Div, Form, H1, P } from "../styled";
import InputBlock from "../styled/InputBlock";
import Personal from "./Personal";
import Stats from "./Stats";
import Wait from "./Wait";

const PointDist = (props) => {
  const {
    creation,
    player,
    onChange,
    onSubmit,
    redistCountdown,
    redistInit,
    redistribute,
    winner,
    user,
  } = props;

  const roundWinner = winner.id === user;

  return (
    <Div pointDist>
      {roundWinner ? (
        <Wait user={user} />
      ) : (
        <Form onChange={onChange} onSubmit={onSubmit} pointDist>
          {creation ? (
            <Personal />
          ) : (
            <Div redist>
              <H1>Redistribute a point?</H1>
              <P>Optional: choose ONE point to redistrubute!</P>
              <P>Time remaining: {redistCountdown}</P>
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
    </Div>
  );
};

export default PointDist;
