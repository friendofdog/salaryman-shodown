import styled from "styled-components";

type ModalProps = {
  closed?: boolean;
};

const Modal = styled.div<ModalProps>`
  background: #fff;
  border: 1px solid #000;
  border-radius: 2px;
  display: ${(props) => (props.closed ? "none" : "block")};
  height: 90%;
  left: 0;
  margin: 5%;
  overflow-y: scroll;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 1000;
`;

export default Modal;
