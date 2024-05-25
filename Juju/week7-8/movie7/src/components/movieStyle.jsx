import styled from "styled-components";

export const MovieContainer = styled.div`
position: relative;
width : 200px;
height : 350px;
background-color: rgb(97, 95, 118);
color: white;
border-radius: 5px;
height: 370px;

@media (max-width: 768px) {
  width: 170px;
  height: 300px;
}

@media (max-width : 480px) {
  width : 130px;
  height : 250px;
}


`;

export const MovieInfo = styled.div`
display: flex;
height : 10px;
width : 100%;
justify-content: space-between;
margin: 10px;
font-size: 14px;
pointer-events: auto;


@media (max-width: 768px) {
  font-size: 12px;
  margin: 8px;
}

@media (max-width : 480px) {
  font-size : 10px;
  margin : 5px;
}

`;

export const MovieImg = styled.div`
width :100%;
img {
    border-radius: 5px;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width : 480px) {
      width : 100%;
    }
}
`;

export const Title = styled.div`
margin-left : 0px;

@media (max-width: 768px) {
  font-size: 11px;
}

@media (max-width : 480px) {
  font-size : 9px;
}

`;

export const Vote = styled.div`
margin-right: 20px;

@media (max-width: 768px) {
  margin-right: 10px;
}

@media (max-width : 480px) {
  margint-right : 8px;
}
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

@media (max-width: 768px) {
    width: 150px;
    height: 280px;
    padding: 10px;
}

@media (max-width : 480px) {
  width : 110px;
  height : 230px;
}

`;

export const DcOverview = styled.div`
margin-top : 15px;
line-height : 15px;
font-size : 10px;
max-height: 300px; 
overflow: hidden; 
text-overflow: ellipsis;

@media (max-width: 768px) {
  font-size: 8px;
  line-height: 15px;
  margin-top: 10px;
  max-height: 260px;
}

@media (max-width : 480px) {
  font-size: 5px;
  line-height : 14px;
  margin-top : 8px;
  max-height : 210px;
}


`;

export const DcTitle = styled.div`
font-size : 13px;
font-weight : bold;


@media (max-width: 768px) {
  font-size: 11px;
}

@media (max-width: 480px) {
  font-size: 9px;
}
`; 



