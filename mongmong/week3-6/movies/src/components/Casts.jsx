import React, {useState, Component} from 'react';
import "../styles/movies.css";
import MovieInfo from "./MovieInfo.jsx";
import styled from "styled-components";
import MovieDetail from '../pages/MovieDetail.jsx';
import { useNavigate } from "react-router-dom";

const Casts = (props) => {
  const {id, original_title, overview, profile_path, vote_average} = props.data;

  return (
    <Movie>
      {isHover && <MovieInfo title={original_title} info={overview}/>}
      <MoviePoster src={`https://image.tmdb.org/t/p/w500/${profile_path}`}/>
    </Movie>
  );
};

export default Casts;

const Movie = styled.div`
  width: 240px;
  height: 430px;
  background-color: rgb(56, 58, 102);
  margin: 35px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`

const MoviePoster = styled.img`
  width: 240px;
  height: 350px;
  border-radius: 6px 6px 0 0;
`

const MovieBasic = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
`

const MovieTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
  width: 150px;
`

const MovieStar = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
`