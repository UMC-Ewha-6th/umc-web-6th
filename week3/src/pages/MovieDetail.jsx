import React from 'react';
import styled from 'styled-components';

const MovieDetail = ({ movie }) => {
  const { original_title, overview, poster_path, vote_average, release_date } = movie;

  return (
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
      <Content>
        <Title>{original_title}</Title>
        <Rating>⭐ {vote_average}</Rating>
        <ReleaseDate>Release Date: {release_date}</ReleaseDate>
        <Overview>{overview || "No overview available"}</Overview>
      </Content>
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  margin-right: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;