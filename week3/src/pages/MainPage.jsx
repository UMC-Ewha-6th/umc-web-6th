import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Movies from "../components/Movies.jsx";
import axios from 'axios';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태 추가
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [name, setName] = useState(''); // 사용자 이름 상태 추가

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const response = await axios.get('http://localhost:8080/auth/me', config);
        setName(response.data.name);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // 검색어 입력 핸들러
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); // 검색 결과 초기화
      return; // 빈 검색어일 때는 검색 결과를 받아오지 않음
    }

    // 검색어가 변경될 때마다 API 호출
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true); // 데이터를 받아오는 중임을 표시
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
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false); // 데이터 받아오기 완료 후 로딩 상태 변경
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
        <TitleText>{name ? `${name}님 환영합니다!` : '환영합니다!'}</TitleText>
      </BannerContainer>
      <SearchContainer>
        <SearchText>📽 Find your movies️ !</SearchText>
        <SearchBox>
          <SearchInput 
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange} />
        </SearchBox>
        <Result>
          {isLoading ? (
            <LoadingText>데이터를 받아오는 중입니다.</LoadingText>
          ) : (
            searchResults.map((movies) => (
              <Movies key={movies.id} data={movies} />
            ))
          )}
        </Result>
      </SearchContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 20px;
`;

const TitleText = styled.h1`
  color: white;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(26, 35, 78);
  flex-grow: 1;
  padding: 20px;
`;

const SearchText = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 35px;
  border-radius: 20px;
  border: none;
  padding: 0 10px;
`;

const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 1200px;
  margin: auto;
  overflow-y: auto;
  height: 50vh;
  padding: 10px;
  background-color: rgb(33, 35, 72);
  border-radius: 10px;
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
`;

const LoadingText = styled.p`
  color: white;
  font-size: 20px;
  margin: auto;
`;
