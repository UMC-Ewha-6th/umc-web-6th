import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

// 네비게이션 바 컴포넌트 스타일
const NavbarContainer = styled.nav`
  background-color: rgb(21, 30, 63);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Logo = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 10px;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;
const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease-in-out; /* 호버 시 애니메이션을 추가합니다. */

  &:hover {
    font-weight: bold;
    cursor: pointer; /* 호버 시 커서를 포인터로 변경합니다. */
  }

  &.active {
    color: yellow;
  }
`;

const Left = styled.div`
  align-self: left;
  display: flex;
`;

// 네비게이션 바 컴포넌트 정의
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적하는 상태 변수
  const handleLoginClick = () => {
    setIsLoggedIn(true); // 로그인 버튼 클릭 시 로그인 상태를 true로 변경
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // 로그아웃 버튼 클릭 시 로그인 상태를 false로 변경
  };

  return (
    <NavbarContainer>
      <NavMenu>
        <NavItem>
          <NavLinkStyled to="/">
            <Logo>UMC MOVIE</Logo>
          </NavLinkStyled>
        </NavItem>
        <Left>
          <NavItem>
            <NavLinkStyled to="/signup">회원가입</NavLinkStyled>
          </NavItem>
          {/* {isLoggedIn ? (
            <NavItem>
              <NavLinkStyled onClick={handleLogoutClick}>
              로그아웃
              </NavLinkStyled>
            </NavItem>
          ) : (
            <NavItem>
              <NavLinkStyled onClick={handleLoginClick}>
              로그인
              </NavLinkStyled>
            </NavItem>
          )} */}
          <NavItem>
            <NavLinkStyled to="/popular">Popular</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/now-playing">Now Playing</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/top-rated">Top Rated</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/upcoming">Upcoming</NavLinkStyled>
          </NavItem>
        </Left>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
