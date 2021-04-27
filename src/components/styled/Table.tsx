import styled from "styled-components";

type TableProps = {
  border?: string;
};

const Table = styled.table<TableProps>((props) => ({
  border: `${props.border || "none"}`,
  width: "100%",
  marginBottom: "1rem",
}));

export default Table;
