import styled, { css } from "styled-components";

const Td = styled.td`
  padding-right: 20px;
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => (props.width ? `${props.width}%` : "auto")};

  ${(props) =>
    props.personal &&
    css`
      height: 2.5rem;
    `}
`;

export default Td;
