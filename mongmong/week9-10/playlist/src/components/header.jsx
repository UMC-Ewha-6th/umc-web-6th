import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../constants/icons';  // Adjust the import path as necessary
import styled from 'styled-components';

const Header = () => {
  const cart = useSelector((state) => state.cart.items);

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <HeaderContainer>
      <Title>UMC Playlist</Title>
      <RightContainer>
        <CartContainer>
            <IconContainer><CartIconStyled/></IconContainer>
            {totalItems > 0 && <AmountCircle>{totalItems}</AmountCircle>}
        </CartContainer>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #685cfc;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  width: 30px;
`;

const RightContainer = styled.div`
    margin: 0 auto;
`;

const CartContainer = styled.div`
  position: relative;
`;

const CartIconStyled = styled(CartIcon)`
  width: 30px;
  height: 30px;
  color: white;
`;

const AmountCircle = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3); 
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;