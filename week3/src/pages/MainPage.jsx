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

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setShowResults(false); // 검색어가 비어 있으면 검색 결과 숨기기
      setSearchResults([]); // 검색 결과를 초기화
      return; // 빈 검색어일 때는 이후의 코드 실행하지 않고 종료
    }

    // 검색어가 변경될 때마다 API 호출
    const fetchSearchResults = async () => {
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
        setShowResults(true); // 검색 결과를 표시
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // 500ms마다 검색어가 변경될 때마다 API 호출
    const delay = setTimeout(() => {
      fetchSearchResults();
    }, 500);

    // 이전의 setTimeout을 클리어하여 다음 useEffect 호출 전에 실행되지 않도록 함
    return () => clearTimeout(delay);
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
        </SearchBox>
        {showResults && (
          <Result>
            {searchResults.map((movies) => (
              <Movies key={movies.id} data={movies} />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 30vh;
  background: black;
`

const TitleText = styled.h1`
  color: white;
  margin-bottom: 20px;
`

const SearchText = styled.h2`
  color: white;
  font-size: 24px;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(26, 35, 78);
  height: 100vh;
`

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

const SearchInput = styled.input`
  width: 370px;
  height: 35px;
  border-radius: 20px;
  border: none;
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