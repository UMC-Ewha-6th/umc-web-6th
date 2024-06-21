import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronUp, ChevronDown } from '../constants/icons';  // Adjust the import path as necessary
import styled from "styled-components";
import { increment, decrement, clear} from '../redux/cartSlice';  // Adjust the import path as necessary
import Modal from './modal';
import { openModal } from '../redux/modalSlice';
import { fetchCart } from '../redux/cartSlice';

const Playlist = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);
  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price)*(item.amount), 0);

  useEffect(() => {
    if (cartStatus === 'idle') {
      dispatch(fetchCart());
    }
  }, [cartStatus, dispatch]);

  if (cartStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (cartStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  const cartlistView = cart.map((item) => (
    <CartItem key={item.id}>
      <Image src={item.img} alt={item.title} />
      <ItemInfo>
        <Title>{item.title} | {item.singer}</Title>
        <GrayText>₩ {item.price}</GrayText>
      </ItemInfo>
      <ActionContainer>
        <IconContainer onClick={() => dispatch(increment(item.id))}><Up /></IconContainer>
        <Amount>{item.amount}</Amount>
        <IconContainer onClick={() => dispatch(decrement(item.id))}><Down /></IconContainer>
      </ActionContainer>
    </CartItem>
  ));


  return (
    <White>
    <Container>
        <BigTitle>당신이 선택한 음반</BigTitle>
        {cartlistView}
    </Container>
    <Price>
        <TextContainer>
            <Title>총 가격</Title>
        </TextContainer>
        <TextContainer>
            <Title>₩ {totalPrice}</Title>
        </TextContainer>
    </Price>
    <Center>
      <ClearBtn onClick={() => dispatch(openModal())}>장바구니 비우기</ClearBtn>
      <Modal/>
    </Center>
    </White>
  );
};

export default Playlist;

const Price = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;  
    border-top: 1px solid #ccc;
`;

const ClearBtn = styled.button` 
    align-items: center;
    padding: 8px 16px;
    border: 1px solid red;
    background-color: white;
    color: red;
`;

const TextContainer = styled.div`
    margin: 0 auto;
`;

const White = styled.div` 
    background-color: white;
    width: 100vw;
    min-height: 100vh;
`;

const Container = styled.div` 
    margin: 0 auto;
    background-color: white;
    padding-top: 40px;
    width: 58%;
`;

const BigTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  color: black;
  margin-top: 70px;
  margin-bottom: 30px;
  text-align:center;
`;

const Center = styled.div`
  text-align:center;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-weight: bold;
  color: black;
  margin: 0;
  text-align:left;
`;

const GrayText = styled.p`
  color: gray;
  margin: 5px 0;
  text-align:left;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  color: gray;
  cursor: pointer;
  margin: 0 5px;
`;

const Up = styled(ChevronUp)``;

const Down = styled(ChevronDown)``;

const Amount = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  color:black;
`;