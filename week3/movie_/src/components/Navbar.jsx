import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 네비게이션 바 컴포넌트 스타일
const NavbarContainer = styled.nav`
  background-color: navy;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

// 활성화된 네비게이션 아이템 스타일
const activeClassName = 'active';

const NavLinkStyled = styled(NavLink).attrs({ activeClassName })`
  color: white;
  text-decoration: none;

  &.${activeClassName} {
    color: yellow;
  }
`;

// 네비게이션 바 컴포넌트 정의
const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>UMC MOVIE</Logo>
      <NavMenu>
        <NavItem>
          <NavLinkStyled exact to="/signup">회원가입</NavLinkStyled>
        </NavItem>
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
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;
