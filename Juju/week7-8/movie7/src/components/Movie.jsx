import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    MovieContainer,
    MovieInfo,
    MovieImg,
    Title,
    Vote
  
  } from './movieStyle';
  import MovieDescription from './MovieDescription';


const baseUrl = 'https://image.tmdb.org/t/p/w200';

export default function Movie ( {title, vote_average, poster_path, overview, release_date, id, backdrop_path}) {

    return(

        <MovieContainer>
            <MovieDescription
                key={title}
                id={id}
                title={title}
                overview={overview} />
            <MovieImg>
                <img src= {baseUrl + poster_path}/>
            </MovieImg>
            <MovieInfo>
                <Title>{title}</Title>
                <Vote>⭐️&nbsp;{vote_average}</Vote>
            </MovieInfo>
        </MovieContainer>

    )
}