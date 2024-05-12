import React from 'react';
import { movies } from '../data/movie';
import '../styles/movie.css';
import Movie from '../components/Movie';

export default function MoviePage() {
  const list = movies.results;

  return (
    <div className="movieContent">
      {list.map((item, idx) => (
        <div key={idx}>
          <Movie
            movieImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            title={item.title}
            star={item.vote_average}
            overview={item.overview}
          />
        </div>
      ))}
    </div>
  );
}
