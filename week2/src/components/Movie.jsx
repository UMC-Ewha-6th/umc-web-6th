import React from 'react';
import '../styles/movie.css';

export default function Movie({ movieImage, title, star, overview }) {
  return (
    <div className="movieBox">
      <div className="explainBox">
        <div className="explainTitle">{title}</div>
        <div className="explainPosition">
          <div className="explain">{overview}</div>
        </div>
      </div>
      <img src={movieImage} alt={title} className="movieImage" />
      <div className="movieText">
        <div className="title">{title}</div>
        <div className="star">{star}</div>
      </div>
    </div>
  );
}
