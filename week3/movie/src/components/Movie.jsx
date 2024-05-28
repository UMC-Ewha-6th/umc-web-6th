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
  backdrop_path,
  id,
}) => {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${id}`, {
      state: {
        id,
        title,
        vote_average,
        poster_path,
        overview,
        release_date,
        backdrop_path,
      },
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
  @media (max-width: 480px) {
    //작은 스마트폰
    width: 160px;
    height: 310px;
    margin: 5px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    width: 180px;
    height: 340px;
    margin: 10px;
  }

  @media (min-width: 769px) {
    //큰 테블릿, 작은 데스크톱
    width: 250px;
    height: 450px;
    margin: 16px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: -webkit-fill-available;
  span {
    margin-left: 3px;
    font-size: small;
    display: flex;
    padding-right: 5px;
    @media (max-width: 480px) {
      //작은 스마트폰
      font-size: 0.8rem;
      text-align: center;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      //큰 스마트폰, 태블릿
      font-size: 0.9rem;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    //작은 스마트폰
    font-size: 0.8rem;
    padding: 5px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (min-width: 769px) {
    //큰 테블릿, 작은 데스크톱
    padding: 10px;
  }
`;

const MovieTitle = styled.p`
  @media (max-width: 480px) {
    //작은 스마트폰
    width: 150px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    width: 150px;
  }

  @media (min-width: 769px) {
    //큰 테블릿, 작은 데스크톱
    width: 180px;
  }
`;
