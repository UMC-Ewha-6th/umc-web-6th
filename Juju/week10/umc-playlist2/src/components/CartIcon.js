import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartIcon as Icon } from '../constants/icons';

const CartWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <CartWrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      {totalQuantity > 0 && <Badge>{totalQuantity}</Badge>}
    </CartWrapper>
  );
};

export default CartIcon;
