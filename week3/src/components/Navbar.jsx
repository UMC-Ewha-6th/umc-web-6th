import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // 사이드바 열기/닫기 상태
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // 페이지 이동 시 사이드바 닫기
  }, [location]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // 사이드바 열기/닫기 토글
  };

  return (
    <>
      <HeaderContainer>
        <LogoTitle to="/">UMC Movie</LogoTitle>
        <MenuIcon onClick={toggleSidebar}>&#9776;</MenuIcon> {/* 햄버거 아이콘 */}
      </HeaderContainer>
      <Sidebar isOpen={isOpen}>
        <MenuList>
          <li><NavLink to="/login" onClick={toggleSidebar}>로그인</NavLink></li>
          <li><NavLink to="/signup" onClick={toggleSidebar}>회원가입</NavLink></li>
          <li><NavLink to="/popular" onClick={toggleSidebar}>Popular</NavLink></li>
          <li><NavLink to="/nowplaying" onClick={toggleSidebar}>Now Playing</NavLink></li>
          <li><NavLink to="/toprated" onClick={toggleSidebar}>Top Rated</NavLink></li>
          <li><NavLink to="/upcoming" onClick={toggleSidebar}>Upcoming</NavLink></li>
        </MenuList>
      </Sidebar>
    </>
  );
};

export default Navbar;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(21, 30, 63);
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Navbar가 다른 요소 위에 올라오도록 z-index 설정 */
`;

const LogoTitle = styled(NavLink)`
  color: white;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  display: none; /* 기본적으로 숨겨진 상태 */
  @media (max-width: 768px) {
    display: block; /* 태블릿 및 모바일 화면에서만 표시됨 */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 40px; /* Navbar의 높이만큼 아래에 표시되도록 수정 */
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: calc(100% - 40px); /* 전체 높이에서 Navbar의 높이를 뺀 만큼 표시되도록 수정 */
  background-color: rgba(21, 30, 63, 0.8); /* 투명도 조절 */
  color: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* isOpen 상태에 따라 표시 여부 설정 */
  flex-direction: column;
  justify-content: center;
  transform:  ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 999; /* Navbar보다 낮은 z-index 설정 */
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 10px;
  
  & li {
    margin: 30px;
  }

  & a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease; /* 색상 변경 애니메이션 */
  }

  & a:hover {
    color: #FFD400;
  }
`;
