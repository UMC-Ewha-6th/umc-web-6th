import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = ({setActiveStyle, isLoggedIn, toggleLogin, isOpen, setIsOpen}) => {
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div onMouseLeave={closeMenu}>
      <SideBar isOpen={isOpen ? "show" : ""}>
        <MenuList>
          <li>
            <NavLink to="/login" style={ setActiveStyle } onClick={() => {toggleLogin(); closeMenu();}}>
              {isLoggedIn ? '로그아웃' : '로그인'}</NavLink>
          </li>
          <li>
            <NavLink to="/signup" style={ setActiveStyle } onClick={closeMenu}>회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/popular" style={ setActiveStyle } onClick={closeMenu}>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/nowplay" style={ setActiveStyle } onClick={closeMenu}>Now Playing</NavLink>
          </li>
          <li>
            <NavLink to="/toprated" style={ setActiveStyle } onClick={closeMenu}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming" style={ setActiveStyle } onClick={closeMenu}>Upcoming</NavLink>
          </li>
        </MenuList>
      </SideBar>
    </div>
  );
};

export default Sidebar;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 300px;
  height: 100%;
  background-color: rgba(0,0,0,0.8); 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform:  ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 10px;
  
  & li {
    margin: 30px;
  }
`;
