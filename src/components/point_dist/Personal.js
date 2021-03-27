import React from "react";

import { Div, Image, Table, Tbody, Thead, Td, Th, Tr } from "../styled";
import InputBlock from "../styled/InputBlock";

import portrait from "../../img/salaryman1.jpg";

const Personal = () => {
  return (
    <Table pointDist>
      <Thead>
        <Tr>
          <Th colSpan="4">履歴書</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td colSpan="2" personal width="50">
            <InputBlock id="name" name="name" type="text" label="名前" />
          </Td>
          <Td personal width="20" align="center">
            <InputBlock
              id="gender-male"
              label="男"
              name="gender"
              type="checkbox"
              value="male"
              width="auto"
            />
            <InputBlock
              id="gender-female"
              label="女"
              name="gender"
              type="checkbox"
              value="female"
              width="auto"
            />
          </Td>
          <Td personal width="30">
            <Div id="profile-pic">
              <Image alt="kazuhide" src={portrait} personal />
            </Div>
          </Td>
        </Tr>
        <Tr>
          <Td colSpan="2" personal>
            <InputBlock id="dob" name="dob" type="text" label="生年月日" />
          </Td>
          <Td colSpan="2" personal></Td>
        </Tr>
        <Tr>
          <Td colSpan="2" personal>
            <InputBlock
              id="address"
              name="address"
              type="text"
              label="現住所"
            />
          </Td>
          <Td colSpan="2" personal>
            <InputBlock id="phone" name="phone" type="text" label="電話" />
          </Td>
        </Tr>
        <Tr>
          <Td colSpan="2" personal>
            <InputBlock
              id="contact"
              name="contact"
              type="text"
              label="連絡先"
            />
          </Td>
          <Td colSpan="2" personal>
            <InputBlock id="fax" name="fax" type="text" label="ファックス" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Personal;
