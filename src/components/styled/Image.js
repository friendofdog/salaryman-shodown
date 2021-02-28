import styled, { css } from "styled-components";

const Image = styled.img`
  ${(props) =>
    props.personal &&
    css`
      width: 120px;
      float: right;
    `}
`;

export default Image;
