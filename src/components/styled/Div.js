import styled, { css } from "styled-components";

const Div = styled.div`
  ${(props) =>
    props.wait &&
    css`
      display: block;
      margin-bottom: 0 auto;
    `}

  ${(props) =>
    props.pointDist &&
    css`
      margin: 0 auto;
      max-width: 800px;
      padding: 2rem 3rem;
    `}

  ${(props) =>
    props.redist &&
    css`
      text-align: center;
    `}
`;

export default Div;
