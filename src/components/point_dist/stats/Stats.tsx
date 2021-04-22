import React from "react";
import { Salaryman } from "../../../classes";

import { Label, Table, Tbody, Thead, Td, Th, Tr } from "../../styled";
import InputBlock from "../../styled/InputBlock";

type StatsProps = {
  player: Salaryman;
  redistribute: boolean;
  redistInit?: boolean;
};

const Stats: React.FC<StatsProps> = ({ player, redistribute, redistInit }) => {
  const noPoints = player.points <= 0;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th colSpan={2}>職業訓練歴</Th>
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
              <Td width="50%">
                <Label htmlFor={stat[0]}>{stat[1].name}</Label>
              </Td>
              <Td width="50%">
                <InputBlock
                  id={stat[0]}
                  name={stat[0]}
                  type="number"
                  min={redistribute && !noPoints ? stat[1].val : 1}
                  max={noPoints ? stat[1].val : 10}
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
