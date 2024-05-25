import styled from "styled-components";

export const Banner = styled.div`
  height: 250px;
  margin: 0 auto;
  padding: 32px 0;
  background-color: black;
  text-align: center;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }


`;

export const MovieImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }


`;



export const MainMiddle = styled.div`
  margin-top: 130px;
  color: white;
  font-size: 30px;
  display : flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 25px;
  }


`;

export const MainBottom = styled.div`
  color: white;
  font-size: 45px;
  font-weight: bold;
  margin-top: 210px;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 35px;
    margin-top: 160px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }

`;

export const Boxcontainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

`;

export const SearchBox = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 18px;
  padding-left: 15px;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height : 30px;
  }

`;

export const Icon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

export const MovieResult = styled.div`
  width: 200px;
  height: 350px;
  font-size: 12px;
  background-color: rgb(97, 95, 118);
  border-radius: 7px;

  @media (max-width: 768px) {
    width: 180px;
    height: 320px;
  }


`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 8px;
  }


`;

export const ResultContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 60px;
  gap: 20px;
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding : 40px;
    width : 80%;
    gap: 15px;
  }


  @media (max-width: 480px) {
    paddiing : 30px;
    width : 60%;
  }

`;

export const Text = styled.div`
  color: white;
  text-align: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }

`;

export const Welcome = styled.div`
  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }

`;

export const BannerText = styled.div`
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

`;