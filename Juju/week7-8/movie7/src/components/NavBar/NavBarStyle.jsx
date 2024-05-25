import styled from 'styled-components';

export const BarContainer = styled.div`
  background-color: rgb(29, 30, 87);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const BarWrap = styled.div`
  max-width: 1400px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const BarTitle = styled.div`
  color: white;
  margin-top: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }


  @media (max-width : 480px) {
    font-size : 17px;
  }
`;

export const BarWrapRight = styled.div`
  display: flex;
  align-items: center; 

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const BarItemWrap = styled.div`
  color: white;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
    color : yellow;
  }

  
`;

export const BarItemWrap2 = styled.div`
  text-decoration: none;
  color: yellow;
  font-weight: 600;


  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
`;

export const ItemList = styled.li`
  padding: 10px;
  margin-right: 10px;
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-110%')};
  height: 100vh;
  background-color: rgb(29, 30, 87);
  margin-top : 63px;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 2000;

  @media (max-width: 768px) {
    width: 95%;
  }


@media (max-width : 480px) {
  font-size : 15px;
  width : 90%;
}
`;

export const SidebarToggle = styled.button`
  position: fixed;
  font-size : 25px;
  top: 5px;
  right: 10px;
  background-color: rgb(29, 30, 87);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2001;
  display: none; 

  @media (max-width: 768px) {
    display: block; 
  }


  @media (max-width : 480px) {
    margin-top : 5px;
    font-size : 20px;
  }
`;

export const Menu = styled.ul`
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 15px 0;
  color: white;
  cursor: pointer;
  list-style : none;

  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }


`;
