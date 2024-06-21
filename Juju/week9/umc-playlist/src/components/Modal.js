import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 배경색 및 투명도 조절 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
    width : 300px;
  background-color: white; /* 모달 배경색 */
  padding: 30px;
  border-radius: 5px;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
