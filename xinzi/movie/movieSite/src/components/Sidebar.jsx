import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? "0" : "-100%"};
  width: 100%;
  height: 100%;
  background-color: rgba(35, 35, 70, 0.97);
  z-index: 998;
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  animation: ${slideIn} 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const TabText = styled.span`
  font-size: 13px;
  padding: 15px;
  color: ${({ selected }) => (selected ? "yellow" : "white")};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2f3542;
    cursor: pointer;
  }
`;

const SidebarTab = ({ path, label, onClick }) => {
  const selected = window.location.pathname === path;

  const handleClick = () => {
    onClick(path);
  };

  return (
    <TabText onClick={handleClick} selected={selected}>
      {label}
    </TabText>
  );
};

const Sidebar = ({ isOpen, onClose, isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <SidebarWrapper $isOpen={isOpen}>
      {!isLoggedIn ? (
        <>
          <SidebarTab path="/login" label="로그인" onClick={handleTabClick} />
          <SidebarTab path="/signup" label="회원가입" onClick={handleTabClick} />
        </>
      ) : (
        <TabText onClick={() => { onLogout(); onClose(); }}>로그아웃</TabText>
      )}
      <SidebarTab path="/popular" label="Popular" onClick={handleTabClick} />
      <SidebarTab path="/nowPlaying" label="Now Playing" onClick={handleTabClick} />
      <SidebarTab path="/topRated" label="Top Rated" onClick={handleTabClick} />
      <SidebarTab path="/upComing" label="Upcoming" onClick={handleTabClick} />
    </SidebarWrapper>
  );
};

export default Sidebar;
