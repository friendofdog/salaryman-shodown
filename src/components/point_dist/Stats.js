import React from "react";

import { Table, Tbody, Thead, Td, Th, Tr } from "../styled";
import InputBlock from "../InputBlock";

const Stats = (props) => {
  const { player, redistribute, redistInit } = props;

  const noPoints = player.points <= 0;

  return (
    <Table pointDist>
      <Thead>
        <Tr>
          <Th colSpan="2">職業訓練歴</Th>
        </Tr>
        <Tr>
          <Td>ポイント</Td>
          <Td>{player.points}</Td>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(player.stats).map((stat, index) => {
          return (
            <Tr key={index}>
              <Td width="50%">{stat[1].name}</Td>
              <Td width="50%">
                <InputBlock
                  id={stat[0]}
                  name={stat[0]}
                  type="number"
                  min={redistribute && !noPoints ? stat[1].val : "1"}
                  max={noPoints ? stat[1].val : "10"}
                  defaultValue={stat[1].val}
                  disabled={redistribute && noPoints && !redistInit}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default Stats;
