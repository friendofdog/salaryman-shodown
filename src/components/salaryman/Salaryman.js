import React from "react";
import styled from "styled-components";
import { Div, Table, Tbody, Td, Tr } from "../styled";

const SalarymanContainer = styled.div`
  background-color: lightyellow;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  margin: 0 5px;
  padding: 5px;
`;

const Salaryman = (props) => {
  const { player, user } = props;

  const visible = user === player.id;

  return (
    <SalarymanContainer>
      <Div>
        {player.name}
        <br />
        {player.title}
        <br />
        {player.company}
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
    </SalarymanContainer>
  );
};

export default Salaryman;
