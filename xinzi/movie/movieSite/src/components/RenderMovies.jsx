import React from "react";
import Movie from "./Movie";
import Loader from "./Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const MovieWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`;

const RenderMovies = ({ movies, loading, loaderRef }) => {
  return (
    <Wrapper>
      <MovieWrapper>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </MovieWrapper>
      {loading && <Loader ref={loaderRef} />} {/* loaderRef를 Loader 컴포넌트에 전달 */}
    </Wrapper>
  );
};

export default RenderMovies;
