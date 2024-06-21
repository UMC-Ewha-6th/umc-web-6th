import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicItem from './MusicItem';
import { calculateTotals, clearCart } from '../redux/cartSlice';
import { openModal, closeModal, selectModalOpen } from '../redux/modalSlice';
import styled from 'styled-components';
import Modal from './Modal';

const CartContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 20px;
`;

const CartHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
margin-bottom: 60px;
font-size : 30px;
font-weight : bold;
`;

const TotalInfo = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: space-between;
  margin-top: 20px;
`;

const ClearButton = styled.button`
border-radius: 5px;
background-color: none;
color: red;
padding: 10px 20px;
border: none;
cursor: pointer;
margin-right: 30px;
`;

const ClearButton1 = styled.button`
border-radius: 5px;
background-color: none;
color: blue;
padding: 10px 20px;
border : none;
cursor: pointer;
margin-right: 30px;
`;

const ClearButton2 = styled.button`
border-radius: 5px;
background-color: none;
color: red;
padding: 10px 20px;
border : none;
cursor: pointer;
margin-left: 50px;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ButtonContainer2 = styled.div`
  margin-left: 70px;
  margin-top: 30px;
`;

const Line = styled.hr`
display: ${(props) => (props.show ? 'flex' : 'none')};
  border: none;
  height: 1px;
  background-color: #333; 
  margin-top : 40px;
`;

const CartList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isModalOpen = useSelector(selectModalOpen);
  const [clearMessage, setClearMessage] = useState(false);

  const handleClearCart = () => {
    dispatch(openModal());
  };

  const clearCartOk = () => {
    dispatch(clearCart());
    dispatch(closeModal());
    setClearMessage(true); 
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart.items, dispatch]);

  return (
    <CartContainer>
      <CartHeader>
        당신이 선택한 음반
      </CartHeader>
      {cart.items.map((item) => (
        <MusicItem
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          singer={item.singer}
          price={item.price}
          amount={item.amount}
        />
      ))}
      <Line show={!isModalOpen && !clearMessage}/>
      <TotalInfo show={!isModalOpen && !clearMessage}>
        <p>총 가격</p>
        <p>₩ {cart.totalPrice}</p>
      </TotalInfo>
      <ButtonContainer show={!isModalOpen && !clearMessage}>
        <ClearButton onClick={handleClearCart}>장바구니 초기화</ClearButton>
      </ButtonContainer>
      <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal())}>
        <ModalTitle>쇼핑 카트를 비우시겠습니까?</ModalTitle>
        <ButtonContainer2>
          <ClearButton1 onClick={clearCartOk}>네</ClearButton1>
          <ClearButton2 onClick={() => dispatch(closeModal())}>아니요</ClearButton2>
        </ButtonContainer2>
      </Modal>
      <Message>{clearMessage && <p>고객님이 좋아하는 음반을 담아보세요~!</p>}</Message>
    </CartContainer>
  );
};

export default CartList;






