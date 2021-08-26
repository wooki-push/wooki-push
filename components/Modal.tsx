import styled from "styled-components";
import React, { FunctionComponent } from "react";
import StockBuy from "./StockBuy";
const ModalContainer = styled.section<{ isOpen: Boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  left: 0;
  top: ${(props) => (props.isOpen ? "0" : "-100vh")};
  transform: all 1s;
`;
const ModalContents = styled.div`
  position: absolute;
  z-index: 200;
  width: 80%;
  height: 90%;
  left: 10vw;
  bottom: 0;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* animation: boxFade 1s 1s linear alternate;
  @keyframes boxFade {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 0;
    }
  } */
`;
const ModalBackground = styled.div`
  background: #333;
  opacity: 0.8;
  /* opacity: 0; */
  width: 100vw;
  height: 100vh;
  z-index: 101;
  transition: all 1s;
`;
const Contents = styled.div`
  font-size: 16px;
  color: #333333;
`;

interface IModal {
  isOpen: Boolean;
  modalOpen(type: Boolean): void;
  contents: string;
}

const Modal: FunctionComponent<IModal> = ({ isOpen, contents, modalOpen }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContents>
        <StockBuy />
      </ModalContents>
      <ModalBackground onClick={() => modalOpen(false)}></ModalBackground>
    </ModalContainer>
  );
};

export default Modal;
