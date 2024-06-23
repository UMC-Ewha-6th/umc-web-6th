import React, { useEffect } from "react";
import styled from "styled-components";
import {
  increaseItemCount,
  decreaseItemCount,
  clearCart,
  removeItem,
  calculateTotals,
} from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../constants/icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  // useEffect 훅 추가: items가 변경될 때마다 calculateTotals를 디스패치
  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  return (
    <CartContainer>
      <Title>당신이 선택한 음반</Title>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <PictureContainer>
            <img src={item.img} alt="이미지 로딩 실패" />
          </PictureContainer>
          <InfoContainer>
            <MusicTitle>
              {item.title} | {item.singer}
            </MusicTitle>
            <Price>{item.price}</Price>
          </InfoContainer>
          <AmountContainer>
            <Increase onClick={() => dispatch(increaseItemCount(item.id))}>
              <ChevronUp />
            </Increase>
            <Amount>{item.amount}</Amount>
            <Decrease onClick={() => dispatch(decreaseItemCount(item.id))}>
              <ChevronDown />
            </Decrease>
          </AmountContainer>
        </ItemContainer>
      ))}
      <Line />
      <TotalPriceContainer>
        <span>총 가격</span>
        <Price>{totalAmount}</Price>
      </TotalPriceContainer>
      <Reset onClick={() => dispatch(clearCart())}>장바구니 초기화</Reset>
    </CartContainer>
  );
};
export default Cart;

const CartContainer = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 150px;
`;

const Title = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 130px 3fr 1fr;
  background: rgb(256 256 256 / 80%);
  margin: 5px 0 5px 0;
  border-radius: 20px;
`;

const PictureContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  img {
    max-width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  height: 80px;
  width: 100%;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
`;

const MusicTitle = styled.span`
  font-size: normal;
  color: black;
  margin-bottom: 10px;
`;
const Price = styled.span`
  font-size: normal;
  color: #39a845;
  margin-top: 10px;
`;
const Increase = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Decrease = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Amount = styled.span``;

const Line = styled.hr`
  width: 100%;
  border-color: white;
  background: #ffffff;
`;

const TotalPriceContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  span {
    margin-top: 10px;
  }
`;
const Reset = styled.button`
  margin-bottom: 20px;
`;
