import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 50, 100);
  position: fixed;
  z-index: 20;
  top: 65px;
  left: 0;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease;
`;

const NavLink = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  color: ${props => (props.pathname ? ' #e5b409' : 'white')};
  text-decoration: none;
  font-weight: 600;
`;

const Logout = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  color: #e5b409;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    font-size: 15px;
  }
`;

export default function MenuBar({ isOpen, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem('token'));
  const [pathname, setPathname] = useState('main');
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    setIsLogin(token);
  }, []);

  useEffect(() => {
    if (location.pathname == '/') {
      setPathname('main');
    }
    if (location.pathname == '/login') {
      setPathname('login');
    }
    if (location.pathname == '/join') {
      setPathname('join');
    }
    if (location.pathname == '/popular') {
      setPathname('popular');
    }
    if (location.pathname == '/nowplaying') {
      setPathname('nowplaying');
    }
    if (location.pathname == '/toprated') {
      setPathname('toprated');
    }
    if (location.pathname == '/upcoming') {
      setPathname('upcoming');
    }
  }, [location.pathname]);

  const onClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setIsLogin(false);
    setIsOpen(false);
  };

  const onClickLink = () => {
    setIsOpen(false);
  };

  return (
    <Container isOpen={isOpen}>
      {isLogin ? (
        <Logout onClick={onClick}>로그아웃</Logout>
      ) : (
        <>
          <NavLink to="/login" onClick={onClickLink} pathname={pathname == 'login'}>
            로그인
          </NavLink>
          <NavLink to="/join" onClick={onClickLink} pathname={pathname == 'join'}>
            회원가입
          </NavLink>
        </>
      )}
      <NavLink to="/popular" onClick={onClickLink} pathname={pathname == 'popular'}>
        Popular
      </NavLink>
      <NavLink to="/nowplaying" onClick={onClickLink} pathname={pathname == 'nowplaying'}>
        Now Playing
      </NavLink>
      <NavLink to="/toprated" onClick={onClickLink} pathname={pathname == 'toprated'}>
        Top rated
      </NavLink>
      <NavLink to="/upcoming" onClick={onClickLink} pathname={pathname == 'upcoming'}>
        Upcoming
      </NavLink>
    </Container>
  );
}
