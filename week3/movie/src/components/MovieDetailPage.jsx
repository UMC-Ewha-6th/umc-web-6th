import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Credit from "../components/Credit";

const baseUrl = "https://image.tmdb.org/t/p/w200";
const castBaseUrl = "https://image.tmdb.org/t/p/w500";

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
      <Background poster={`${baseUrl + state.backdrop_path}`}></Background>

      <DetailContainer>
        <DetailImgDiv>
          <DetailImg src={baseUrl + state.poster_path} alt={state.title} />
        </DetailImgDiv>
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

      <CreditContainer>
        {isLoading ? (
          <LoadingMessage>데이터를 받아오는 중 입니다...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : creditResult && creditResult.length > 0 ? (
          creditResult.map((cast) => (
            <Credit
              key={cast.id}
              name={cast.name}
              profile_path={cast.profile_path}
            />
          ))
        ) : (
          <NoResultMessage></NoResultMessage>
        )}
      </CreditContainer>
    </>
  );
};

export default MovieDetail;
const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  padding-top: 150px;
  padding-bottom: 150px;
  align-items: center;
  @media (max-width: 480px) {
    //작은 스마트폰
    padding-top: 80px;
    flex-direction: column;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    padding-top: 80px;
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    //태블릿 세로
    height: 60vh;
    flex-direction: row;
  }
  @media (min-width: 992px) and (max-width: 1279px) {
    //태블릿 가로, 작은 데스크톱
    height: 60vh;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    //큰 데스크톱, 모니터
    height: 60vh;
    flex-direction: row;
  }
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

const DetailImgDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DetailImg = styled.img`
  @media (max-width: 480px) {
    //작은 스마트폰
    height: 30vh;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 작은 태블릿 세로
    height: 40vh;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    //태블릿 세로
    height: 60%;
  }
  @media (min-width: 992px) and (max-width: 1279px) {
    //태블릿 가로, 작은 데스크톱
    height: 100%;
  }

  @media (min-width: 1280px) {
    //큰 데스크톱, 모니터
    height: 100%;
  }
`;

const DetailInfo = styled.div`
  flex: 1;
  color: white;
  padding-left: 0px;
  @media (max-width: 480px) {
    //작은 스마트폰
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    //큰 테블릿, 작은 데스크톱
    min-width: 50vw;
  }

  @media (min-width: 1280px) {
    //큰 데스크톱, 모니터
  }
`;

const DetailTitle = styled.div`
  font-size: 33px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    font-size: 2rem;
  }
`;

const DetailVote = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    font-size: 1.2rem;
  }
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
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    font-size: 1.2rem;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    //큰 스마트폰, 태블릿
    font-size: 1.2rem;
  }
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
const ActorName = styled.p`
  color: white;
`;
const CreditWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ActorImage = styled.div`
  height: 50px;
  width: auto;
`;
const CreditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: space-between;
  margin: 0 auto;
`;
