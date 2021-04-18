import styled, { css } from "styled-components";

const P = styled.p`
  ${(props) =>
    props.marginAll &&
    css`
      margin: ${props.marginAll}px;
    `}
`;

export default P;
