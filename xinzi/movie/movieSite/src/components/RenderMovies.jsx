import React from "react";
import Movie from "./Movie";
import Loader from "./Loader";
import styled from "styled-components";
//import shortId from 'shortid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const MovieWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
  
`;

const RenderMovies = ({ movies, loading, loaderRef }) => {
  return (
    <Wrapper>
      <MovieWrapper>
        {movies.map((movie) => (
          <Movie
            //key={shortId.generate()}
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
