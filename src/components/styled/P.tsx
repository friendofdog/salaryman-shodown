import styled, { css } from "styled-components";

type PProps = {
  marginAll?: string;
};

const P = styled.p<PProps>`
  ${(props) =>
    props.marginAll &&
    css`
      margin: ${props.marginAll}px;
    `}
`;

export default P;
