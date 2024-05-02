import React from 'react';

const Movie = ({title, vote_average, backdrop_path}) => {
  return (
    <>
      <h3>제목: {title}</h3>
      <h4>평점: {vote_average}</h4>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}/>
      <br />
    </>
  );
};

export default Movie;