import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const baseUrl = "https://image.tmdb.org/t/p/w200";

const Movie = ({
  title,
  vote_average,
  poster_path,
  overview,
  release_date,
}) => {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${title}`, {
      state: { title, vote_average, poster_path, overview, release_date },
    });
  };

  const getRoundedRating = (rating) => {
    return rating.toFixed(1); // 소수점 한 자리까지 반올림
  };

  return (
    <MovieContainer onClick={onClickMovieItem}>
      <img src={baseUrl + poster_path} alt={title} />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <span>⭐ {getRoundedRating(vote_average)}</span>
      </MovieInfo>
    </MovieContainer>
  );
};

export default Movie;

const MovieContainer = styled.div`
  width: 250px;
  height: 450px;
  margin: 16px;
  color: white;
  background-color: #373b69;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  img {
    max-width: 100%;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: -webkit-fill-available;
  span {
    margin-left: 3px;
    font-size: small;
    display: flex;
    padding-right: 5px;
  }
`;

const MovieTitle = styled.p`
  width: 180px;
`;
