import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Loader from "./Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  //height: calc(100% - 20px);
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const MovieWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`;

const RenderMovies = ( {fetchUrl} ) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
      }
    };

    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results); // API 호출 결과를 movies 상태에 저장
        setLoading(false); // 로딩 상태 변경
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // 에러 발생 시 로딩 상태 변경
      });
  }, [fetchUrl]); // fetchUrl이 변경될 때마다 useEffect 재실행

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <MovieWrapper>
          {movies.map((movie) => (
            <Movie
              key={movie.id} // 각 영화마다 고유한 key prop 추가
              id={movie.id}
              poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))}
        </MovieWrapper>
      )}
    </Wrapper>
  );
};

export default RenderMovies;
