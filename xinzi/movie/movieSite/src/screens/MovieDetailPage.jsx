import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Loader from "../components/Loader";
import styled from "styled-components";
import StarRating from "../components/StarRating";
import Cast from "../components/Cast";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BackdropImage = styled.div`
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const Image = styled.img`
  height: 300px;
  border-radius: 7px;

  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 20px;

  @media (min-width: 768px) {
    margin: 30px 0 30px 30px;
  }
  @media (min-width: 1024px) {
    margin: 50px 0 50px 50px;
  }
`;

const Title = styled.h2`
  margin: 10px 0px;
  font-size: 20px;
  color: white;
`;

const VoteAverage = styled.span`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const ReleaseDate = styled.span`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const Text = styled.span`
  margin: 10px 0px;
  font-size: 15px;
  color: white;
`;

const Overview = styled.span`
  width: 100%;
  margin: 10px 0px;
  font-size: 15px;
  color: white;

  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const Screen = styled.div`
  display: flex;
  width: calc(100% - 40px);
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CreditInfoWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px;

    @media (min-width: 480px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(7, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(10, 1fr);
    }
`;

const MovieDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
      
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setCasts(data.cast);
        setCrews(data.crew);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
      
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        movie && (
          <>
          <BackdropImage src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}>
            <Wrapper>
              <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <InfoContainer>
                <Title>{movie.title}</Title>
                <VoteAverage>평점 <StarRating value={Math.round(movie.vote_average)}/></VoteAverage>
                <ReleaseDate>개봉일 {movie.release_date}</ReleaseDate>
                <Text>줄거리</Text>
                <Overview>{movie.overview ? movie.overview : 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'}</Overview>
              </InfoContainer>
            </Wrapper>
          </BackdropImage>
          
          <Screen>
            <Text>출연진 및 제작진</Text>
            <CreditInfoWrapper>
            {casts.map((cast) => (
                <Cast
                key={cast.id} // 각 영화마다 고유한 key prop 추가
                name={cast.name}
                profile_path={cast.profile_path}
                />
            ))}
            </CreditInfoWrapper>
            
            <CreditInfoWrapper>
            {crews.map((crew) => (
                <Cast
                key={crew.id} // 각 영화마다 고유한 key prop 추가
                name={crew.name}
                profile_path={crew.profile_path}
                />
            ))}
            </CreditInfoWrapper>
        </Screen>
          
        </>
        )
      )}
    </>
  );
};

export default MovieDetailPage;