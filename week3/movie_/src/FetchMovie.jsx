import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const FetchMovie = ({url}) => {
  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  useEffect(() => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
    })
  }, []);

  return (
    <>
      <h1>Fetch로 영화 정보 가져오기</h1>
      {movies.map((movie) => (
        <Movie 
          key={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          backdrop_path={movie.backdrop_path}></Movie>
      ))}
      <hr />
    </>
  );
};

export default FetchMovie;