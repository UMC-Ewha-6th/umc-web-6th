import React from "react";
import styled from "styled-components";
import { CartIcon } from "../constants/icons";
import { useSelector } from "react-redux";

// 네비게이션 바 컴포넌트 정의
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <NavbarContainer>
      <Logo>UMC Playlist</Logo>
      <Icon>
        <CartIcon />
        {totalQuantity > 0 && <Badge>{totalQuantity}</Badge>}
      </Icon>
    </NavbarContainer>
  );
};

export default Navbar;

// 네비게이션 바 컴포넌트 스타일

const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: white;
  color: red;
  border-radius: 50%;
  width: 20px; /* 동그라미의 너비를 고정 */
  height: 20px; /* 동그라미의 높이를 고정 */
  display: flex; /* 중앙 정렬을 위한 Flexbox 사용 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  font-size: 9px;
  font-weight: bold;
  text-align: center;
`;

const NavbarContainer = styled.nav`
  background-color: #39a845;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Logo = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 20px;
`;

const Icon = styled.div`
  display: flex;
  height: 30px;
  position: fixed;
  right: 15px;
`;
