// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const Li = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li><NavLink to="/">Home</NavLink></Li>
        <Li><NavLink to="/popular">Popular</NavLink></Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
