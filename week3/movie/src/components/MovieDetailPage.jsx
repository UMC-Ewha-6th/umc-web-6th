import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const baseUrl = "https://image.tmdb.org/t/p/w200";

const MovieDetail = () => {
  const { state } = useLocation();
  const [creditResult, setCreditResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCreditResult = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${state.id}/credits`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0OTMyMGY2MWM0ZTljYTY3MjM5ZTA2OGQ4MDI4ZCIsInN1YiI6IjY2MzMyMGI5OTlkNWMzMDEyNjU2OTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBYeoId4cpixWOlGWUpsZs48qmPvniJhUsOhlmxL8dg",
          },
        }
      );
      if (!response.ok) {
        throw new Error("데이터를 불러올 수 없습니다."); // 에러 처리
      }
      const json = await response.json();
      console.log("Credit data:", json); //여기까지는 작동 됨
      console.log("Results:", json.cast);
      setCreditResult(json.cast);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false); // 데이터 요청 완료 시 로딩 상태 해제
    }
  };

  useEffect(() => {
    getCreditResult();
  }, []);

  return (
    <>
      <DetailContainer>
        <Background poster={`${baseUrl + state.backdrop_path}`}></Background>
        <DetailImg>
          <img
            src={baseUrl + state.poster_path}
            alt={state.title}
            height="100%"
          />
        </DetailImg>
        <DetailInfo>
          <DetailTitle>{state.title}</DetailTitle>
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

      <DetailContainer>
        {isLoading ? (
          <LoadingMessage>데이터를 받아오는 중 입니다...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : creditResult && creditResult.length > 0 ? (
          creditResult.map((cast) => (
            <ActorContainer>
              {cast.profile_path && ( // 배우의 프로필 이미지가 있는 경우에만 출력
                <ActorImage src={baseUrl + cast.profile_path} alt={cast.name} />
              )}
              <ActorName>{cast.name}</ActorName> {/* 배우의 이름 출력 */}
            </ActorContainer>
          ))
        ) : (
          <NoResultMessage></NoResultMessage>
        )}
      </DetailContainer>
      <></>
    </>
  );
};

export default MovieDetail;
const ActorName = styled.p`
  color: white;
`;
const ActorContainer = styled.div``;
const ActorImage = styled.div`
  height: 20px;
  width: 20px;
`;
const CreditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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
  overflow: hidden;
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

const LoadingMessage = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 20px;
`;

const NoResultMessage = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;
