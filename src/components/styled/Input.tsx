import styled, { css } from "styled-components";

type InputProps = {
  submit?: boolean;
  width?: string;
};

const Input = styled.input<InputProps>`
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
