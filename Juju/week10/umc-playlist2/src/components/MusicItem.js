import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { ChevronUp, ChevronDown } from '../constants/icons'; // 아이콘 컴포넌트 임포트
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Amount = styled.div`
  padding: 8px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 17px;
  margin-left: 20px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  object-fit: cover;
`;

const ItemTitle = styled.p`
  margin: 0;
  font-size: 16px;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  white-space: pre-wrap;
  margin: 0;
  font-size: 16px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const QuantityButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: black;
  width: 30px;
  height: 30px;
`;

const MusicItem = ({ id, title, img, amount, singer, price }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <Info>
        <ItemImage src={img} alt={title} />
        <ItemDetails>
          <ItemTitle>{title} | {singer}</ItemTitle>
          <ItemPrice>₩ {price}</ItemPrice>
        </ItemDetails>
      </Info>
      <QuantityControl>
        <QuantityButton onClick={() => dispatch(increaseQuantity({ id }))}>
          <ChevronUp />
        </QuantityButton>
        <Amount>{amount}</Amount>
        <QuantityButton onClick={() => dispatch(decreaseQuantity({ id }))}>
          <ChevronDown /> 
        </QuantityButton>
      </QuantityControl>
    </ItemContainer>
  );
};

export default MusicItem;







