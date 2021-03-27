import styled, { css } from "styled-components";

const H2 = styled.h2`
  ${(props) =>
    props.arena &&
    css`
      color: #fff;
      text-align: center;
    `}
`;

export default H2;
