import styled from "styled-components";

export const MovieContainer = styled.div`
position: relative;
width : 200px;
height : 350px;
background-color: rgb(97, 95, 118);
color: white;
border-radius: 5px;
height: 370px;
`;

export const MovieInfo = styled.div`
display: flex;
height : 10px;
width : 100%;
justify-content: space-between;
margin: 10px;
font-size: 14px;
pointer-events: auto;
`;

export const MovieImg = styled.div`
width :100%;
img {
    border-radius: 5px;
}
`;

export const Title = styled.div`
margin-left : 0px;

`;

export const Vote = styled.div`
margin-right: 20px;
`;

export const Description = styled.div`
position: absolute;
z-index: 1;
width : 170px;
height : 340px;
border-radius: 5px;
background-color: rgba(0, 0, 0, 0.7);
opacity: 0;
justify-content: center;
padding : 15px;

&:hover {
    opacity: 1;
  }
`;

export const DcOverview = styled.div`
margin-top : 15px;
line-height : 17px;
font-size : 11px;
`;

export const DcTitle = styled.div`
font-size : 13px;
`;



