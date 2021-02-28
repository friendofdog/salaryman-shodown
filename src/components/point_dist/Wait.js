import React from "react";
import { Div, Image } from "../styled";
import matte from "../../img/matte.svg";

const Wait = () => {
  return (
    <Div wait>
      <Image alt="Chotto matte..." src={matte} />
    </Div>
  );
};

export default Wait;
