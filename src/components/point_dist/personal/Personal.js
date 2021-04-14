import React from "react";
import styled from "styled-components";

import { Div, Table, Tbody, Thead, Td, Th, Tr } from "../../styled";
import InputBlock from "../../styled/InputBlock";

import portrait from "../../../img/salaryman1.jpg";

const ProfilePic = styled.img`
  float: right;
  height: 140px;
`;

const Personal = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th colSpan="4">履歴書</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td colSpan="2" height="2.5" width="50">
            <InputBlock id="name" name="name" type="text" label="名前" />
          </Td>
          <Td width="20" height="2.5" align="center">
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
          <Td height="2.5" width="30">
            <Div>
              <ProfilePic alt="Salaryman picture" src={portrait} />
            </Div>
          </Td>
        </Tr>
        <Tr>
          <Td colSpan="2">
            <InputBlock id="dob" name="dob" type="text" label="生年月日" />
          </Td>
          <Td colSpan="2"></Td>
        </Tr>
        <Tr>
          <Td colSpan="2">
            <InputBlock
              id="address"
              name="address"
              type="text"
              label="現住所"
            />
          </Td>
          <Td colSpan="2">
            <InputBlock id="phone" name="phone" type="text" label="電話" />
          </Td>
        </Tr>
        <Tr>
          <Td colSpan="2">
            <InputBlock
              id="contact"
              name="contact"
              type="text"
              label="連絡先"
            />
          </Td>
          <Td colSpan="2">
            <InputBlock id="fax" name="fax" type="text" label="ファックス" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Personal;
