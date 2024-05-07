import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Movies from "../components/Movies.jsx";


const MainPage = () => {

  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태 추가
  const [showResults, setShowResults] = useState(false); // 검색 결과 표시 여부 상태 추가

  // 검색어 입력 핸들러
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY', // 여기에 본인의 API 키를 입력하세요
            accept: 'application/json',
          },
        }
      );
      const data = await response.json();
      setSearchResults(data.results);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setShowResults(false); // 검색어가 없을 때 검색 결과 숨기기
    }
  }, [searchTerm]);


  return (
    <MainContainer>
      <BannerContainer>
        <TitleText>환영합니다</TitleText>
      </BannerContainer>
      <SearchContainer>
        <SearchText>📽 Find your movies️ !</SearchText>
        <SearchBox>
          <SearchInput 
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange} />
          <SearchBtn onClick={handleSearchSubmit} disabled={!searchTerm.trim()} ><p>🔍</p></SearchBtn>
        </SearchBox>
        {showResults && (
          <Result>
            {searchResults.map((movies) => (
              <Movies key = {movies.id} data={movies} />
            ))}
          </Result>
        )}
      </SearchContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 30vh;
  background: black;
`
const TitleText = styled.h1`
  color: white;
`

const SearchContainer = styled(BannerContainer)`
  height: 100vh;
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
  margin-bottom: 20px;
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

const Result = styled.div`
display: flex;
background-color: rgb(33, 35, 72);
padding: 0 5px;
width: 1250px;
height: 500px;
flex-wrap: wrap;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 8px;
}
&::-webkit-scrollbar-thumb {
  background-color: gold;
  border-radius: 4px;
}
&::-webkit-scrollbar-track {
  background-color: transparent;
}
`