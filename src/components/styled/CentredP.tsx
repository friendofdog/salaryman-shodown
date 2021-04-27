import styled from "styled-components";

type CentredPProps = {
  color?: string;
  fontSize?: string;
  marginTop?: string;
  textAlign?: string;
};

const CentredP = styled.p<CentredPProps>((props) => ({
  color: `${props.color || "#fff"}`,
  fontSize: `${props.fontSize || "3"}rem`,
  marginTop: `${props.marginTop || "1"}rem`,
  textAlign: "center",
}));

export default CentredP;
