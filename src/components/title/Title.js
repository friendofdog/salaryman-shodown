import React from "react";
import styled from "styled-components";

import { Div, H1 } from "../styled";
import titleImage from "../../img/title-image.png";

const TitleImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 450px;
`;

const Title = (props) => {
  const { showImg } = props;

  return (
    <Div>
      {showImg ? (
        <TitleImage alt="Salaryman Shodown" src={titleImage} />
      ) : (
        <H1>Salaryman Shodown</H1>
      )}
    </Div>
  );
};

export default Title;
