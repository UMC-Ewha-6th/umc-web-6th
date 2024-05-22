import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태값

  // 페이지 로드 시 localStorage에서 토큰을 읽어와서 로그인 상태를 설정
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);


  const handleLogout = () => {
    // localStorage에서 토큰 제거
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // 로그아웃 후 메인 페이지로 이동
    navigate('/');
  };

  return (
    <HeaderContainer>
      <LogoTitle onClick={() => navigate('/')}>UMC Movie</LogoTitle>
      <MoveCategory>
        {isLoggedIn ? (
          <>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <CategoryLink to='/signup'>회원가입</CategoryLink>
            <CategoryLink to='/login'>로그인</CategoryLink>
          </>
        )}
        <CategoryLink to='/popular'>Popular</CategoryLink>
        <CategoryLink to='/nowplaying'>Now Playing</CategoryLink>
        <CategoryLink to='/toprated'>Top Rated</CategoryLink>
        <CategoryLink to='/upcoming'>Upcoming</CategoryLink>
      </MoveCategory>
    </HeaderContainer>
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
`

const LogoTitle = styled.p`
  color: white;
  margin-left: 10px;
  cursor: pointer;
`

const MoveCategory = styled.div`
  display: flex;
  align-items: center;
`

const CategoryLink = styled(Link)`
  color: white;
  margin: 0 10px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-size: 15px;
    color: gold;
    font-weight: bold;
  }
`

const WelcomeMessage = styled.span`
  color: white;
  margin-right: 10px;
`

const LogoutButton = styled.button`
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`
