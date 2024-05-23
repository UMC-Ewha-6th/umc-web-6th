import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import axios from "axios";
import Casts from '../components/Casts';
import Navbar from '../components/Navbar.jsx';

const MovieDetail = () => {
  const { movie: selectedMovie } = useLocation().state;
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';

  // Now you can use `selectedMovie` to avoid repeating the variable name
  const { original_title, overview, poster_path, vote_average, release_date } = selectedMovie;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+id+'/credits?',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzAwOTA4NGIyNTY1ZmFmNzYxNDFmNGJhMmYyZGZlZiIsInN1YiI6IjY2Mzc3MTY4YzYxNmFjMDEyMjFiMDhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-DcguU9teC_FIkbPEMCSCq08miKo9TGUZwwb7VgmhE'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCredits(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
    <div>
    <Container>
    <Navbar/>
      <BackgroundPoster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
      <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
      <Content>
        <Title>{original_title}</Title>
        <StarRating voteAverage={vote_average} />
        <ReleaseDate>개봉일 {release_date}</ReleaseDate>
        <ReleaseDate>줄거리</ReleaseDate>
        <Overview>{overview || "No overview available"}</Overview>
      </Content>
    </Container>
    <ActorWrapper>
        <CreditTitle>출연진 및 제작진</CreditTitle>
        <CreditContainer>
            {credits.cast && credits.cast.map((item, i) => (
                <Profile key={i}>
                    <ImgContainer>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : defaultImageUrl} alt={item.name} />
                    </ImgContainer>
                    <Name>{item.name}</Name>
                    <Role>acting</Role>
                </Profile>
            ))}
            {credits.crew && credits.crew.map((item, i) => (
                <Profile key={i}>
                    <ImgContainer>
                        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : defaultImageUrl} alt={item.name} />
                    </ImgContainer>
                    <Name>{item.name}</Name>
                    <Role>directing</Role>
                </Profile>
            ))}
        </CreditContainer>
        </ActorWrapper>
    </div>
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
  @media (min-width: 768px) {
    flex-direction: row; /* Row direction for larger screens */
  }
`;

const BackgroundPoster = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: 0;
`;

const Poster = styled.img`
  width: 300px;
  height: 450px;
  margin-right: 60px;
  margin-bottom:170px;
  z-index: 1;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: rgb(56, 58, 102);
  margin-bottom:200px;
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
`;

const ActorWrapper = styled.div`
  width: 100vw;
  display: grid;
  background-color: rgb(56, 58, 102);
  justify-content: center;
`;

export const CreditContainer = styled.div`
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top : 40px;
`;


export const Name = styled.div`
color : white;
max-height : 30px;
font-size : 13px;
margin-top : 10px;
`;

export const CreditTitle = styled.div`
padding-top: 20px;
color : white;
text-align : center;
font-weight : bold;
font-size : 20px;
background-color: rgb(56, 58, 102);
`;

export const Profile = styled.div`
margin-bottom : 70px;
margin-right : 15px;
margin-left : 15px;
width : 100px;
max-height : 80px;
text-align : center;
`;

export const ImgContainer = styled.div`
img {
    width : 60px;
    height : 60px;
    border-radius : 50%;
}
`;

export const Role = styled.div`
color : white;
font-size : 13px;
margin-top : 8px;
`;