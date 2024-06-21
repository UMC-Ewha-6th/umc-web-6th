import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './features/cart/Cart';
import { CartIcon } from './components/Icons';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #4A90E2;
  color: white;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin-bottom: 50px;
`;

const MainTitle = styled.h2`
  text-align: center;
  margin-top: 40px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
`;

function App() {
  const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <AppContainer>
      <Header>
        <HeaderTitle>UMC PlayList</HeaderTitle>
        <HeaderRight>
          <CartIconWrapper>
            <CartIcon />
            <CartCount>{cartItemsCount}</CartCount>
          </CartIconWrapper>
        </HeaderRight>
      </Header>
      <MainTitle>당신이 선택한 음반</MainTitle>
      <Cart />
    </AppContainer>
  );
}

export default App;
