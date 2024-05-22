import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가
  const navigate = useNavigate();

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
      setIsLoading(true); // 데이터 요청 시작 시 로딩 상태 설정

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${search}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0OTMyMGY2MWM0ZTljYTY3MjM5ZTA2OGQ4MDI4ZCIsInN1YiI6IjY2MzMyMGI5OTlkNWMzMDEyNjU2OTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBYeoId4cpixWOlGWUpsZs48qmPvniJhUsOhlmxL8dg",
            },
          }
        );

        if (!response.ok) {
          throw new Error("데이터를 불러올 수 없습니다."); // 에러 처리
        }

        const data = await response.json();
        setSearchResult(data.results);
        setShowResult(true);
      } catch (error) {
        setError(error.message); // 에러 메시지 설정
      } finally {
        setIsLoading(false); // 데이터 요청 완료 시 로딩 상태 해제
      }
    };

    const delay = setTimeout(() => {
      fetchSearchResult();
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  const getRoundedRating = (rating) => {
    return rating.toFixed(1);
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
            {isLoading ? ( // 로딩 중이면 로딩 메시지 표시
              <LoadingMessage>데이터를 받아오는 중 입니다...</LoadingMessage>
            ) : error ? ( // 에러 발생 시 에러 메시지 표시
              <ErrorMessage>{error}</ErrorMessage>
            ) : showResult && searchResult.length > 0 ? ( // 데이터가 있으면 결과 표시
              <SearchResult>
                {searchResult.map((movie) => (
                  <StyledMovie
                    key={movie.id}
                    onClick={() =>
                      navigate(`/movie/${movie.id}`, {
                        state: {
                          title: movie.title,
                          vote_average: movie.vote_average,
                          poster_path: movie.poster_path,
                          backdrop_path: movie.backdrop_path,
                          overview: movie.overview,
                          release_date: movie.release_date,
                          id: movie.id,
                        },
                      })
                    }
                  >
                    {movie.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    )}
                    <MovieContent>
                      <MovieTitle>{movie.title}</MovieTitle>
                      <MovieRating>
                        ⭐ {getRoundedRating(movie.vote_average)}
                      </MovieRating>
                    </MovieContent>
                  </StyledMovie>
                ))}
              </SearchResult>
            ) : (
              <NoResultMessage></NoResultMessage>
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
  margin: 20px auto;
  border-radius: 30px;
  padding-inline-start: 20px;
`;

const Search = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchResult = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-height: 60vh;
  place-items: center;
  overflow-y: auto;
  padding: 0 16px;
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

const LoadingMessage = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 20px;
`;

const NoResultMessage = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;
