import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";

const Sidebar = ({ isOpen, setIsOpen, isLoggedIn, handleLogout }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen == true) {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <SidebarContainer isOpen={isOpen}>
      {isLoggedIn ? (
        <NavItem>
          <NavLinkStyled onClick={handleLogout}>log out</NavLinkStyled>
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
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: rgb(2 3 3 / 50%);
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-200px")};
  transition: right 0.3s ease;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 60px;
  z-index: 1;
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
  list-style-type: none;
  margin-top: 20px;
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
