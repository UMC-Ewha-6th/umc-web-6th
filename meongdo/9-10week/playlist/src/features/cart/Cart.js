import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, increaseQuantity, decreaseQuantity } from './cartSlice';
import { openModal } from '../modal/modalSlice';
import { ChevronUp, ChevronDown } from '../../components/Icons';
import Modal from '../../components/Modal';
import LoadingSpinner from '../../components/Spinner';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const CartImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 8px;
`;

const CartInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CartPrice = styled.div`
  font-size: 14px;
  padding-top: 10px;
  color: #99;
`;

const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4A90E2;

  &:hover {
    color: #007bff;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

const TotalLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ClearButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #dc3545;
    color: white;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => 
    state.cart.items.reduce((total, item) => total + Number(item.price) * item.quantity, 0)
  );
  const showModal = useSelector(state => state.modal.showModal);
  const cartStatus = useSelector(state => state.cart.status);
  const cartError = useSelector(state => state.cart.error);

  useEffect(() => {
    if (cartStatus === 'idle') {
      dispatch(fetchCartItems());
    }
  }, [cartStatus, dispatch]);

  const handleClearCart = () => {
    dispatch(openModal());
  };

  if (cartStatus === 'loading') {
    return <LoadingSpinner />;
  }

  if (cartStatus === 'failed') {
    return <CartContainer>Error: {cartError}</CartContainer>;
  }

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <EmptyCartMessage>
          <p>고객님이 좋아하는 음반을 담아보세요~!</p>
        </EmptyCartMessage>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <CartImage src={item.img} alt={item.title} />
            <CartInfo>
              <CartTitle>{item.title} | {item.singer}</CartTitle>
              <CartPrice>₩ {item.price}</CartPrice>
            </CartInfo>
            <QuantityControl>
              <QuantityButton onClick={() => dispatch(increaseQuantity(item.id))}>
                <ChevronUp />
              </QuantityButton>
              <QuantityDisplay>{item.quantity}</QuantityDisplay>
              <QuantityButton onClick={() => dispatch(decreaseQuantity(item.id))}>
                <ChevronDown />
              </QuantityButton>
            </QuantityControl>
          </CartItem>
        ))}
      </ul>
      <TotalContainer>
        <TotalLabel>총 가격</TotalLabel>
        <TotalAmount>₩ {totalAmount}</TotalAmount>
      </TotalContainer>
      <ClearButtonWrapper>
        <ClearButton onClick={handleClearCart}>장바구니 초기화</ClearButton>
      </ClearButtonWrapper>
      <Modal show={showModal} />
    </CartContainer>
  );
};

export default Cart;
