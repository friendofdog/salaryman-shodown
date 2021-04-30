import React from "react";
import styled from "styled-components";
import { Div, P, Table, Tbody, Td, Tr } from "../styled";
import { Salaryman } from "../../classes";

type PlayerProps = {
  player: Salaryman;
  user: string;
};

const PlayerContainer = styled.div`
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  margin: 0 5px;
  padding: 5px;
`;

const Player: React.FC<PlayerProps> = ({ player, user }) => {
  const visible = user === player.id;

  return (
    <PlayerContainer>
      <Div>
        <P marginAll="0">{player.name}</P>
        <P marginAll="0">{player.title}</P>
        <P marginAll="0">{player.company}</P>
      </Div>
      <Div>CP: {player.cp}</Div>
      <Table border="none">
        <Tbody>
          {Object.values(player.stats).map((stat, index) => {
            return (
              <Tr key={index}>
                <Td>{stat.name}</Td>
                <Td>{visible ? stat.val : "??"}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </PlayerContainer>
  );
};

export default Player;
