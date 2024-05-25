import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Description,
  DcOverview,
  DcTitle

} from './movieStyle';

const MovieDescription = ({title, vote_average, poster_path, overview, release_date, id, backdrop_path}) => {

  const navigate = useNavigate();

  const onClickMovieItem = () => {
      navigate(`/movie/${id}`,{
      state : { title, vote_average, poster_path, overview, release_date, id, backdrop_path }
  })
  }
  return (
    <Description onClick={onClickMovieItem}>
      <DcTitle>{title}</DcTitle>
      <DcOverview>{overview}</DcOverview>
    </Description>
  );
};

export default MovieDescription;