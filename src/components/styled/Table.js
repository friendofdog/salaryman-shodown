import styled from "styled-components";

const Table = styled.table((props) => ({
  border: `${props.border || "none"}`,
  width: "100%",
  marginBottom: "1rem",
}));

export default Table;
