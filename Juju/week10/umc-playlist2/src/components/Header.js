import React from 'react';
import styled from 'styled-components';
import CartIcon from './CartIcon';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #3f51b5;
  color: white; 
`;

const Title = styled.h1`
  margin : 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Real Data UMC PlayList</Title>
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
