import styled, { css } from "styled-components";

const Table = styled.table`
  ${(props) =>
    props.pointDist &&
    css`
      border: 1px solid black;
      width: 100%;
      margin-bottom: 1rem;
    `}
`;

export default Table;
