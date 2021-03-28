import styled from "styled-components";

const CentredP = styled.p((props) => ({
  color: `${props.color || "#fff"}`,
  fontSize: `${props.fontSize || "3"}rem`,
  marginTop: `${props.marginTop || "1"}rem`,
  textAlign: "center",
}));

export default CentredP;
