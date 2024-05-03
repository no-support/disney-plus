import styled from 'styled-components';
import { createPortal } from 'react-dom';
const Modal = ({ opened, onClose, children }) => {
  if (!opened) return null;
  return createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper>
        <Close onClick={onClose}>&times;</Close>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  height: 100vh;
  z-index: 1100;
  background-color: black;

  @media only screen and (min-width: 320px) {
    width: 75%;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  color: gray;
  background-color: transparent;
  border: none;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    cursor: pointer;
  }
`;

export default Modal;
