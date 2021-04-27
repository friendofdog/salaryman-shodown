import React from "react";
import { Div, CentredP } from "../../styled";

type RedistributeProps = {
  redistCountdown: number;
};

const Redistribute: React.FC<RedistributeProps> = ({ redistCountdown }) => {
  return (
    <Div>
      <CentredP color="#000" fontSize="1">
        Redistribute a point?
      </CentredP>
      <CentredP color="#000" fontSize="1">
        Optional: choose ONE point to redistrubute!
      </CentredP>
      <CentredP color="#000" fontSize="1">
        Time remaining: {redistCountdown}
      </CentredP>
    </Div>
  );
};

export default Redistribute;
