import styled from "styled-components";

type TdProps = {
  align?: "left" | "center" | "right" | "justify" | undefined;
  height?: string;
  width?: string;
};

const Td = styled.td<TdProps>((props) => ({
  height: `${props.height ? `${props.height}rem` : "auto"}`,
  paddingRight: "20px",
  textAlign: `${props.align || "left"}` as TdProps["align"],
  width: `${props.width ? `${props.width}%` : "auto"}`,
}));

export default Td;
