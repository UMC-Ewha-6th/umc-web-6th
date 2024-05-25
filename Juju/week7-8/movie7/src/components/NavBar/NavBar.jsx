import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarContainer,
  BarWrap,
  BarWrapRight,
  BarTitle,
  BarItemWrap,
  ListContainer,
  ItemList,
  BarItemWrap2,
  Sidebar,
  SidebarToggle,
  Menu,
  MenuItem,

} from './NavBarStyle';
import { useAuth } from '../AuthContext'; 

export default function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // 창 크기에 따라 isMobile 상태 변경
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // 클릭딜 때 isSidebarOpen의 상태를 바꿈
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // 창 크기가 변경될 때마다 isMobile의 상태를 변경

  }, []);

  return (
    <BarContainer>
      <BarWrap>
        <Link to='/'>
          <BarTitle>UMC&nbsp;Movie</BarTitle>
        </Link>
        {isMobile ? (
          <>
          <SidebarToggle onClick={toggleSidebar}>☰</SidebarToggle>
          <>
            <Sidebar isOpen={isSidebarOpen}>
              {isLoggedIn ? (
                <MenuItem onClick={logout}>로그아웃</MenuItem>
              ) : (
                <>
                  <MenuItem onClick={toggleSidebar}>
                    <Link to='/login'><BarItemWrap>로그인</BarItemWrap></Link>
                  </MenuItem>
                  <MenuItem onClick={toggleSidebar}>
                    <Link to='/signup'><BarItemWrap>회원가입</BarItemWrap></Link>
                  </MenuItem>
                </>
              )}
              <Menu>
                <MenuItem onClick={toggleSidebar}> 
                  <Link to='/popular'>
                    <BarItemWrap>Popular</BarItemWrap>
                </Link>
                </MenuItem>
                <MenuItem onClick={toggleSidebar}>
                    <Link to='/nowplaying'>
                        <BarItemWrap>Nowplaying</BarItemWrap>
                    </Link>
                </MenuItem>
                <MenuItem onClick={toggleSidebar}>
                        <Link to='/toprated'>
                            <BarItemWrap>Toprated</BarItemWrap>
                        </Link>
                </MenuItem>
                <MenuItem onClick={toggleSidebar}>
                    <Link to='/upcoming'>
                        <BarItemWrap>Upcoming</BarItemWrap>
                    </Link>
                </MenuItem>
              </Menu>
            </Sidebar>
          </>
          </>
        ) : (
          <BarWrapRight>
            <ListContainer isLoggedIn={isLoggedIn}>
              {isLoggedIn ? (
                <ItemList>
                  <BarItemWrap2 onClick={logout}>로그아웃</BarItemWrap2>
                </ItemList>
              ) : (
                <>
                  <ItemList>
                    <Link to='/login'>
                      <BarItemWrap>로그인</BarItemWrap>
                    </Link>
                  </ItemList>
                  <ItemList>
                    <Link to='/signup'>
                      <BarItemWrap>회원가입</BarItemWrap>
                    </Link>
                  </ItemList>
                </>
              )}
              <ItemList>
                <Link to='/popular'>
                  <BarItemWrap>Popular</BarItemWrap>
                </Link>
              </ItemList>
              <ItemList>
                <Link to='/nowplaying'>
                  <BarItemWrap>Nowplaying</BarItemWrap>
                </Link>
              </ItemList>
              <ItemList>
                <Link to='/toprated'>
                  <BarItemWrap>Toprated</BarItemWrap>
                </Link>
              </ItemList>
              <ItemList>
                <Link to='/upcoming'>
                  <BarItemWrap>Upcoming</BarItemWrap>
                </Link>
              </ItemList>
            </ListContainer>
          </BarWrapRight>
        )}
      </BarWrap>
    </BarContainer>
  );
}