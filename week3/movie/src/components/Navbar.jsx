import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

// 네비게이션 바 컴포넌트 정의
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적하는 상태 변수
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 변수
  const location = useLocation();

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("loginStateChange"));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/">
              <Logo>UMC MOVIE</Logo>
            </NavLinkStyled>
          </NavItem>

          <Left>
            {isLoggedIn ? (
              <NavItem>
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLinkStyled to="/login">로그인</NavLinkStyled>
                </NavItem>
                <NavItem>
                  <NavLinkStyled to="/signup">회원가입</NavLinkStyled>
                </NavItem>
              </>
            )}
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
          {isSidebarOpen ? (
            <SidebarButton onClick={toggleSidebar}>&#128473;</SidebarButton>
          ) : (
            <SidebarButton onClick={toggleSidebar}>☰</SidebarButton>
          )}
        </NavMenu>
      </NavbarContainer>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;

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
  z-index: 2;
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
    cursor: pointer;
  }

  &.active {
    color: yellow;
  }
`;

const LogoutButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

const Left = styled.div`
  align-self: left;
  display: flex;

  @media (max-width: 991px) {
    display: none;
  }
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 30px;
  &:hover {
    font-weight: bold;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
