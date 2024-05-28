import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const API_KEY = "d3149320f61c4e9ca67239e068d8028d";
const URL = "https://api.themoviedb.org/3/movie/";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
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
      setMovies(data.results);
    } catch (error) {
      setError(error.message); // 에러 메시지 설정
    } finally {
      setLoading(false); // 데이터 요청 완료 시 로딩 상태 해제
    }
    // const json = await (
    //   await fetch(`${URL}top_rated?api_key=${API_KEY}`)
    // ).json();
    // setMovies(json.results);
    // setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <AppContainer>
      {loading ? (
        <Loading />
      ) : (
        <MoviePage>
          {movies.map((data) => (
            <Movie
              key={data.id}
              id={data.id}
              backdrop_path={data.backdrop_path}
              title={data.title}
              poster_path={data.poster_path}
              vote_average={data.vote_average}
              release_date={data.release_date}
              overview={data.overview}
            />
          ))}
        </MoviePage>
      )}
    </AppContainer>
  );
};

export default Popular;
const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 가로 여백을 추가하여 각 영화를 가운데 정렬합니다. */
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬합니다. */
  padding: 16px; /* 위아래 여백을 추가합니다. */
  padding-top: 60px;
  padding-bottom: 30px;
  box-sizing: border-box;
  justify-content: center;
`;
