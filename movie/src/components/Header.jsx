import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgb(32, 44, 91);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 17px;
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Logout = styled.div`
  color: #e5b409;
  cursor: pointer;
  &:hover {
    font-size: 15px;
  }
`;

const Lists = styled.div`
  font-size: 14px;
  display: flex;
  gap: 40px;
  margin-right: 20px;
  ${NavLink}:hover {
    font-size: 15px;
  }
`;
export default function Header() {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem('token'));

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setIsLogin(token);
  }, []);

  const onClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setIsLogin(false);
  };

  return (
    <Container>
      <Logo>
        <NavLink to="/">UMC Movie</NavLink>
      </Logo>
      <Lists>
        {isLogin ? (
          <Logout onClick={onClick}>로그아웃</Logout>
        ) : (
          <>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/join">회원가입</NavLink>
          </>
        )}
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/nowplaying">Now Playing</NavLink>
        <NavLink to="/toprated">Top rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </Lists>
    </Container>
  );
}
