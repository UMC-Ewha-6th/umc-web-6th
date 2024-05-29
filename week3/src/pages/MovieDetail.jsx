import React from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import Credits from "../components/Credits.jsx"

const MovieDetail = () => {
  const { movie: selectedMovie } = useLocation().state;
  const { original_title, overview, poster_path, vote_average, release_date, id } = selectedMovie;
  const intVoteAverage = Math.floor(vote_average);

  return (
    <Container>
      <Info>
        <BackgroundPoster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
        <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
        <Content>
          <Title>{original_title}</Title>
          <div>
            {Array.from({length: intVoteAverage}, (_, i) => (
              <span>⭐</span>
            ))}
          </div>
          <ReleaseDate>개봉일 {release_date}</ReleaseDate>
          <ReleaseDate>줄거리</ReleaseDate>
          <Overview>{overview || "No overview available"}</Overview>
        </Content>
      </Info>
      <Credit>
        <h2>출연진 및 제작진</h2>
        <Credits id={id} />
      </Credit>
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: rgb(56, 58, 102);
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundPoster = styled.img`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
  opacity: 0.1;
  z-index: 0;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  margin-right: 60px;
  margin-bottom: 200px;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Overview = styled.p`
  font-size: 16px;
  margin-top: 10px;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Credit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }
`;