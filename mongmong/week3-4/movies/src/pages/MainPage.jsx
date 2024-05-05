import React from 'react';
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainContainer>
      <BannerContainer>
        <TitleText>환영합니다</TitleText>
      </BannerContainer>
      <SearchContainer>
        <SearchText>📽 Find your movies️ !</SearchText>
        <SearchBox>
          <SearchInput/>
          <SearchBtn><p>🔍</p></SearchBtn>
        </SearchBox>
      </SearchContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 50vh;
  background: black;
`
const TitleText = styled.h1`
  color: white;
`

const SearchContainer = styled(BannerContainer)`
  height: 50vh;
  background: rgb(26, 35, 78);
  flex-direction: column;
`

const SearchText = styled(TitleText)`
  font-size: 38px;
  margin-top: -130px;
  margin-bottom: 50px;
`

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  gap: 20px;
`

const SearchInput = styled.input`
  width: 370px;
  height: 35px;
  border-radius: 20px;
  border: none;
`

const SearchBtn = styled.button`
  width: 27px;
  height: 27px;
  border-radius: 30px;
  background-color: gold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`