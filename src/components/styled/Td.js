import styled from "styled-components";

const Td = styled.td((props) => ({
  height: `${props.height ? `${props.height}rem` : "auto"}`,
  paddingRight: "20px",
  textAlign: `${props.align || "left"}`,
  width: `${props.width ? `${props.width}%` : "auto"}`,
}));

export default Td;
