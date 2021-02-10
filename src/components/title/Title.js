import React from "react";

import "./Title.css";
import titleImage from "../../img/title-image.png";

const Title = (props) => {
  const { showImg } = props;

  return (
    <div className="title">
      {showImg ? (
        <img alt="Salaryman Shodown" src={titleImage} />
      ) : (
        <div className="app-title">Salaryman Shodown</div>
      )}
    </div>
  );
}

export default Title;
