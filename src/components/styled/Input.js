import styled, { css } from "styled-components";

const Input = styled.input`
  border-radius: 0;
  outline: 0;
  width: ${(props) => props.width || "100%"};

  ${(props) =>
    props.submit &&
    css`
      background-color: white;
      color: black;
      padding: 1rem;
    `}
`;

export default Input;
