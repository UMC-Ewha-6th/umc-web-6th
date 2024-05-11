import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import Movies from "../components/Movies.jsx";
import debounce from 'lodash.debounce';
import DataLoading from '../components/DataLoading.jsx';

const MainPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Search = (value) => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query: value, include_adult: 'false', language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzAwOTA4NGIyNTY1ZmFmNzYxNDFmNGJhMmYyZGZlZiIsInN1YiI6IjY2Mzc3MTY4YzYxNmFjMDEyMjFiMDhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-DcguU9teC_FIkbPEMCSCq08miKo9TGUZwwb7VgmhE'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const debouncedSearch = debounce(Search, 300);

  const handleInputChange = (event) => {
    setIsLoading(true);
    const { value } = event.target;
    debouncedSearch(value); // Trigger debounced search
  };
  
  return (
    <MainContainer>
      <BannerContainer>
        <TitleText>환영합니다</TitleText>
      </BannerContainer>
      <SearchContainer>
        <SearchText>📽 Find your movies️ !</SearchText>
        <SearchBox>
          <SearchInput onChange={handleInputChange}/>
          <SearchBtn><p>🔍</p></SearchBtn>
        </SearchBox>
      </SearchContainer>
      {isLoading ? (
        <DataLoading /> // Render Loading component if isLoading is true
      ) : (
      <MovieContainer>
          {movieData.map((data, index) => (
            <Movies data={data} key={index} />
          ))}
      </MovieContainer>
      )}
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
  padding-left: 20px;
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

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`