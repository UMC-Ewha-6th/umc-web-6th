import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태값
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  const goMain = () => {
    navigate(`/`);
  }

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  useEffect(() => {
    if (localStorage.getItem('token') != null){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, []);


  return (
    <HeaderContainer>
      <LogoTitle onClick={goMain}>UMC Movie</LogoTitle>
      <HamburgerMenu onClick={toggleMenu}>
        ☰
      </HamburgerMenu>
      <MoveCategory menuOpen={menuOpen}>
        { isLoggedIn ?
        <CategoryTitle onClick={() => logOut()}>로그아웃</CategoryTitle> :
        <>
          <CategoryTitle onClick={() => navigate(`/login`)}>로그인</CategoryTitle>
          <CategoryTitle onClick={() => navigate(`/signup`)}>회원가입</CategoryTitle>
        </>
        }
        <CategoryTitle onClick={() => navigate(`/popular`)}>Popular</CategoryTitle>
        <CategoryTitle onClick={() => navigate(`/nowplaying`)}>Now Playing</CategoryTitle>
        <CategoryTitle onClick={() => navigate(`/toprated`)}>Top Rated</CategoryTitle>
        <CategoryTitle onClick={() => navigate(`/upcoming`)}>Upcoming</CategoryTitle>
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
  z-index: 5;
`

const LogoTitle = styled.p`
  color: white;
  margin-left: 10px;
  cursor: pointer;
`

const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MoveCategory = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 40px;
  right: ${({ menuOpen }) => (menuOpen ? '0' : '-100%')}; /* Off-screen to the right when closed */
  width: 100%;
  height: 100vh;
  background-color: rgb(21, 30, 63);
  transition: right 0.3s ease-in-out; /* Smooth transition */
  flex-direction: column; /* Vertical layout */

  @media (min-width: 769px) {
    display: flex; /* Show menu for screens larger than 768px */
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
    padding-top: 0;
    flex-direction: row;
    transition: none; /* Disable transition for larger screens */
  }

`

const CategoryTitle = styled.button`
color: white;
  margin: 10px 0;
  font-size: 13px;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  justify-content: flex-start; /* Align text to the left */
  padding-left: 20px; /* Add padding for better appearance */
  
  @media (max-width: 768px) {
    width: 100%; /* Make each menu item take full width on small screens */
  }

  &:hover {
    font-size: 15px;
    color: gold;
    font-weight: bold;
  }
`