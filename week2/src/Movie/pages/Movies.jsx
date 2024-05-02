import React from 'react'
import {movies} from "../movieDummy";
import Movie from '../Component/Movie';


export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        { //JSX 안에 자바스크립트 문법 사용할 경우 {}를 사용해야 한다.
          movies.results.map((item) => {
              return (
                <Movie 
                  title = {item.title}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}
                  overview={item.overview}
                />
              );
          })
        }
      </div>
    </div> 
  );
}