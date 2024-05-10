import styled from "styled-components";

export const BarContainer = styled.div`
background-color: rgb(29, 30, 87);
position : fixed;
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
`;

export const BarTitle = styled.div`
color : white;
margin-top : 10px;
font-size: 20px;
`;


export const BarWrapRight = styled.div`
display: flex;
`;

export const BarItemWrap = styled.div`
text-decoration: none;
color: white;
font-weight: 600;
&:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

export const ListContainer = styled.ul`
display: flex;
margin-left: 870px;
`;

export const ItemList = styled.li`
padding: 10px;
margin-right: 10px;
white-space:nowrap; 
`;
