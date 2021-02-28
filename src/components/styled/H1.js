import styled, { css } from "styled-components";

const H1 = styled.h1`
  ${(props) =>
    props.redist &&
    css`
      font-size: 1.5rem;
    `}
`;

export default H1;
