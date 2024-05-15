import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  background: white;
  padding: 15px;
  border-radius: 5px;
  height: 100px;
  width: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.p`
  font-size: 13px;
`;

const CloseButton = styled.button`
  height: 20px;
  width: 50px;
  font-size: 11px;
  border-radius: 7px;
  border: none;
`;

const Modal = ({ closeModal }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalContent>가입을 축하합니다!!!</ModalContent>
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
