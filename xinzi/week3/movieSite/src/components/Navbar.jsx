import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgb(20, 20, 50);
  z-index: 999;
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const TabText = styled.span`
  font-size: 13px;
  padding: 15px;
  color: ${({ selected }) => (selected ? "yellow" : "white")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 state

  const handleTabClick = (path) => {
    navigate(path);
  };

  const Tab = ({ path, label }) => {
    const selected = window.location.pathname === path; // 선택된 탭이 현재 경로와 일치하는지 확인

    const handleClick = () => {
      handleTabClick(path);
    };

    return (
      <TabText onClick={handleClick} selected={selected}>
        {label}
      </TabText>
    );
  };

  return (
    <NavbarWrapper>
      <LeftColumn>
        <Tab path="/" label="XZ Movie" />
      </LeftColumn>
      <RightColumn>
        {!isLoggedIn ? ( // 로그인 상태에 따라 다른 버튼 렌더링
          <Tab path="/logIn" label="로그인" />
        ) : (
          <TabText>로그아웃</TabText>
        )}
        <Tab path="/signUp" label="회원가입" />
        <Tab path="/popular" label="Popular" />
        <Tab path="/nowPlaying" label="Now Playing" />
        <Tab path="/topRated" label="Top Rated" />
        <Tab path="/upComing" label="Upcoming" />
      </RightColumn>
    </NavbarWrapper>
  );
};

export default Navbar;
