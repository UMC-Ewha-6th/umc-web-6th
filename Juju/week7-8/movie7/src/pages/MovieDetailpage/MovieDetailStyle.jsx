import styled from "styled-components";

export const DetailBox = styled.div`
  padding-bottom: 50px;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DetailImg = styled.div`
  margin-left: 5%;
  margin-top: 130px;

  img {
    width: 350px;

    @media (max-width: 768px) {
      width: 200px; 
    }
    
    @media (max-width: 768px) {
      width: 170px; 
    }

  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
    padding-top : 40px;
  }

`;

export const BackGroundImage = styled.img`
  opacity: 0.1;
  top: 0;
  z-index: -10;
  position: fixed;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DetailInfo = styled.div`
  color: white;
  margin-top: 200px;
  margin-left: 3%;
  padding : 0 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
    margin-left: 0;
    padding : 0 10px;
  }

`;

export const DetailTitle = styled.div`
  font-size: 33px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top : 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top : 13px;
  }
`;

export const DetailVote = styled.div`
  display: flex;
  margin-top: 35px;
  font-size: 19px;
  font-weight: bold;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
    font-size : 17px;
  }

  @media (max-width: 768px) {
    margin-top: 13px;
    font-size : 15px;
  }

`;

export const Starcontainer = styled.div`
  margin-left: 10px;
  grid-template-columns: repeat(10, 1fr);

  @media (max-width: 768px) {
    font-size : 15px;
  }

  @media (max-width: 480px) {
    font-size : 13px;
    margin-top : 2px;
  }

`;

export const DetailOverview = styled.div`
  margin-top: 35px;
  max-width: 650px;

  @media (max-width: 768px) {
    margin-top: 20px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    font-size : 13px;
  }

`;

export const ReleaseDate = styled.div`
  margin-top: 35px;
  font-size: 19px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size : 15px;
  }
`;

export const Text = styled.div`
  margin-top: 25px;
  font-size: 19px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-left : 10%;
    margin-top: 15px;
    font-size: 17px;
  }

  @media (max-width: 480px) {
    margin-left : 10%;
    margin-top: 15px;
    font-size: 15px;
  }

`;

export const Overview = styled.div`
  margin-top: 35px;
  line-height: 1.7;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 10%;
  }
`;

export const Overview2 = styled.div`
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left : 10%;
  }


@media (max-width : 480px) {
  line-height : 20px;
}
`;

export const CreditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    margin-top: 20px;

  }


`;

export const Name = styled.div`
  color: white;
  max-height: 30px;
  font-size: 13px;
  margin-top: 10px;
`;

export const CreditTitle = styled.div`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size : 17px;
    padding-bottom : 10px;
  }

`;

export const Profile = styled.div`
  margin-bottom: 70px;
  margin-right: 15px;
  margin-left: 15px;
  width: 100px;
  max-height: 80px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

`;

export const CreditBox = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 1400px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 400px;
  padding-top: 40px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
    margin-left: 5%;
    margin-top: 30px;
  }
`;

export const ImgContainer = styled.div`
  img {
    width: 60px;
    max-height: 55px;
    border-radius: 50%;

    @media (max-width: 480px) {
      width : 40px;
      height : 40px;
  
    }
  }
`;

export const Role = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 8px;

  @media (max-width: 480px) {
    font-size : 11px;

  }
`;

