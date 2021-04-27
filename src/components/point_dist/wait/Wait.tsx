import React from "react";
import styled from "styled-components";

import { Image } from "../../styled";
import matte from "../../../img/matte.svg";

const WaitContainer = styled.div`
  display: block;
  margin-bottom: 0 auto;
`;

const Wait = () => {
  return (
    <WaitContainer>
      <Image alt="Chotto matte..." src={matte} />
    </WaitContainer>
  );
};

export default Wait;
