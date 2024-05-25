import styled from "styled-components";

export const AppContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
align-items: center;
padding-bottom : 50px;
padding-top : 90px;
`;

export const LoadingContainer = styled.div`
justify-content: center;
align-items: center;
`;

export const PgContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

export const Pagination = styled.div`
display : flex;
justify-content: space-between;
padding-bottom : 70px;
`;

export const PageButton1 = styled.div`
padding : 10px;
font-size : 20px;
color: ${props => (props.page === 1 ? 'gray' : 'white')};

@media (max-width : 480px) {
    font-size : 15px;
  }
`;

export const PageButton2 = styled.div`
padding : 10px;
width : calc(100% - 8px); 
font-size : 20px;


@media (max-width : 480px) {
    font-size : 15px;
  }
`;

export const CurrentPage = styled.div`
padding : 10px;
font-size : 20px;


@media (max-width : 480px) {
    font-size : 15px;
  }
`;


