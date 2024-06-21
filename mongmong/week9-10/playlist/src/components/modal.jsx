import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import styled from 'styled-components';
import { clear, clearCartAndCloseModal} from '../redux/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <Content>
        <Title>담아두신 모든 음반을 삭제하시겠습니까?</Title>
        <BtnContainer>
            <BlueBtn onClick={() => dispatch(clearCartAndCloseModal())}>
            예
            </BlueBtn>
            <RedBtn onClick={() => dispatch(closeModal())}>
            아니요
            </RedBtn>
        </BtnContainer>
      </Content>
   </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  padding-top: 60px;
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 300px;
  border-radius: 5px;
`;

const BtnContainer = styled.div`
    justify-content: space-between;
`;

const RedBtn = styled.button`
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 4px 20px;
  margin-left: 20px;
`;

const BlueBtn = styled.button`
  color: blue;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 4px 20px;
  margin-right: 20px;
`;

const Title = styled.h4`

`;



