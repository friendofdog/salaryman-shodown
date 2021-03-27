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

  ${(props) =>
    props.gameWinner &&
    css`
      text-align: center;
      font-size: 3rem;
    `}

  ${(props) =>
    props.arena &&
    css`
      color: #fff;
      text-align: center;
    `}

  ${(props) =>
    props.salarymanWrapper &&
    css`
      align-items: center;
      display: flex;
      justify-content: center;
    `}

  ${(props) =>
    props.application &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.arena &&
    css`
      background-color: brown;
    `}
`;

export default Div;
