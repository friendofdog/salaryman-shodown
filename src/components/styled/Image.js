import styled from "styled-components";

const Image = styled.img`
  cursor: ${(props) => props.cursor || "default"};
`;

export default Image;
