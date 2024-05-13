import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const baseUrl = "https://image.tmdb.org/t/p/w200";

const MovieDetail = () => {
  // useParams를 사용하여 URL의 동적인 부분인 movieName을 가져옴
  const { movieName } = useParams();
  const { state } = useLocation();

  return (
    <>
      <Background poster={`${baseUrl + state.poster_path}`}></Background>
      <DetailContainer>
        <DetailImg>
          <img
            src={baseUrl + state.poster_path}
            alt={movieName}
            height="100%"
          />
        </DetailImg>
        <DetailInfo>
          <DetailTitle>{movieName}</DetailTitle>
          <DetailVote>
            평점&nbsp;
            <Rating rating={state.vote_average} />
          </DetailVote>
          <ReleaseDate>개봉일&nbsp;&nbsp;{state.release_date}</ReleaseDate>
          <DetailOverview>
            <Text>줄거리</Text>
            <Overview>{state.overview}</Overview>
          </DetailOverview>
        </DetailInfo>
      </DetailContainer>
    </>
  );
};

export default MovieDetail;

const Background = styled.div`
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(10px); /* 블러처리 */
  z-index: -1;
  opacity: 0.5;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 60vh;
  padding: 50px;
  padding-top: 150px;
  padding-bottom: 30px;
  align-items: center;
`;

const DetailImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DetailInfo = styled.div`
  flex: 1;
  color: white;
  padding-left: 0px;
`;

const DetailTitle = styled.div`
  font-size: 33px;
  font-weight: bold;
`;

const DetailVote = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
`;

const Starcontainer = styled.div`
  display: flex;
`;

const DetailOverview = styled.div`
  margin-top: 20px;
`;

const ReleaseDate = styled.div`
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
`;

const Overview = styled.div`
  margin-top: 20px;
  line-height: 1.7;
`;

// 별점 컴포넌트
function Rating({ rating }) {
  const numOfStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < numOfStars; i++) {
    stars.push(<span key={i}>⭐️</span>);
  }
  return <Starcontainer>{stars}</Starcontainer>;
}
