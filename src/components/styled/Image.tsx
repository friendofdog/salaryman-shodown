import styled from "styled-components";

type ImageProps = {
  cursor?: string;
};

const Image = styled.img<ImageProps>`
  cursor: ${(props) => props.cursor || "default"};
`;

export default Image;
