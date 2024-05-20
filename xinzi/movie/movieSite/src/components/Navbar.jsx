import React, { useState, useEffect } from "react";
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

const Tab = ({ path, label }) => {
  const navigate = useNavigate();
  const selected = window.location.pathname === path;

  const handleClick = () => {
    navigate(path);
  };

  return (
    <TabText onClick={handleClick} selected={selected}>
      {label}
    </TabText>
  );
};

const LogoutTab = ({ label, onLogout }) => {
  const handleClick = () => {
    onLogout();
  };

  return (
    <TabText onClick={handleClick}>
      {label}
    </TabText>
  );
};

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, [window.localStorage.getItem("token")]);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <NavbarWrapper>
      <LeftColumn>
        <Tab path="/" label="XZ Movie" />
      </LeftColumn>
      <RightColumn>
        {!isLoggedIn ? (
          <>
            <Tab path="/login" label="로그인" />
            <Tab path="/signup" label="회원가입" />
          </>
        ) : (
          <LogoutTab label="로그아웃" onLogout={handleLogout} />
        )}
        <Tab path="/popular" label="Popular" />
        <Tab path="/nowPlaying" label="Now Playing" />
        <Tab path="/topRated" label="Top Rated" />
        <Tab path="/upComing" label="Upcoming" />
      </RightColumn>
    </NavbarWrapper>
  );
};

export default Navbar;
