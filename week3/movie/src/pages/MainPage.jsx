import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const searchInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setSearchResult([]);
      setShowResult(false);
      return;
    }

    const fetchSearchResult = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${search}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0OTMyMGY2MWM0ZTljYTY3MjM5ZTA2OGQ4MDI4ZCIsInN1YiI6IjY2MzMyMGI5OTlkNWMzMDEyNjU2OTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBYeoId4cpixWOlGWUpsZs48qmPvniJhUsOhlmxL8dg",
          },
        }
      );

      const data = await response.json();
      setSearchResult(data.results); // Corrected property name to 'results'
      setShowResult(true); // Moved setShowResult to here
    };

    const delay = setTimeout(() => {
      fetchSearchResult();
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  const getRoundedRating = (rating) => {
    return rating.toFixed(1); // 소수점 한 자리까지 반올림
  };

  return (
    <Container>
      <MainContent>
        <MessageContainer>
          <Message>환영합니다</Message>
        </MessageContainer>
        <SearchContainer>
          <Message>🎥Find Your Movies !</Message>
          <Search>
            <SearchInput
              type="text"
              value={search}
              onChange={searchInputChange}
            />
            {showResult && searchResult.length > 0 && (
              <SearchResult>
                {searchResult.map((movie) => (
                  <StyledMovie key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <MovieContent>
                      <MovieTitle>{movie.title}</MovieTitle>
                      <MovieRating>
                        ⭐ {getRoundedRating(movie.vote_average)}
                      </MovieRating>
                    </MovieContent>
                  </StyledMovie>
                ))}
              </SearchResult>
            )}
          </Search>
        </SearchContainer>
      </MainContent>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 60px;
  padding-bottom: 30px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background: black;
`;

const Message = styled.p`
  color: white;
  font-size: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: #22254b;
  padding-top: 20px;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 40%;
  margin: 20px auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
  border-radius: 30px;
  padding-inline-start: 20px;
`;

const Search = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  flex-direction: column;
`;

const SearchResult = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* 영화 카드를 그리드로 배치 */
  max-height: 60vh; /* 최대 높이 지정 */
  place-items: center;
  overflow-y: auto; /* Y 축으로 스크롤 가능하도록 설정 */
  padding: 0 16px; /* 좌우 여백 추가 */
  width: 100%;
  background-color: rgb(21, 30, 63);
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

const StyledMovie = styled.div`
  width: 200px;
  height: 350px;
  margin: 8px;
  color: white;
  background-color: #373b69;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  img {
    max-width: 100%;
  }
`;

const MovieContent = styled.div`
  padding: 12px;
  display: flex;
`;

const MovieTitle = styled.p`
  margin: 0;
  font-size: small;
  width: 130px;
`;

const MovieRating = styled.span`
  margin-left: 3px;
  font-size: small;
`;
