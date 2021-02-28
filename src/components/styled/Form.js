import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.pointDist &&
    css`
      background-color: lightgray;
      border: 1px solid black;
      padding: 1rem;
    `}
`;

export default Form;
