import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieList, getStaffList } from '../apis/Movie';
import { useQuery } from 'react-query';
import Loading from '../components/Loading';

const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
`;

const OpacityBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 50, 100, 0.9);
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const MovieImg = styled.img`
  width: 300px;
  z-index: 1;
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 3px;
`;

const MainText = styled.div`
  font-size: 16px;
`;

const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 18px;
`;

const Overview = styled.div`
  font-size: 13px;
  width: 600px;
`;

const CastBox = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  gap: 20px;
`;

const PersonBox = styled.div`
  margin-top: 18px;
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ProfileText = styled.div`
  width: 70px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  font-size: 13px;
`;
const Profile = styled.img`
  width: 65px;
  height: 65px;
  border: transparent;
  border-radius: 100%;
  object-fit: cover;
`;

const Loader = styled.div`
  margin-top: 40vh;
`;

export default function DetailPage() {
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [staffList, setStaffList] = useState([]);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [isStaffLoading, setIsStaffLoading] = useState(false);
  const star = [];

  const movieDetailList = useQuery(['movieDetail', location.state?.title], () => getMovieList(location.state?.title), {
    onSuccess: data => {
      console.log(data.results);
      setMovie(data.results);
      setIsDetailLoading(true);
    },
    onError: error => {
      console.log(error);
      setIsDetailLoading(false);
    },
  });

  const movieStaffList = useQuery(['movieStaff', params.id], () => getStaffList(params.id), {
    onSuccess: data => {
      console.log(data.cast);
      setStaffList(data.cast);
      setIsStaffLoading(true);
    },
    onError: error => {
      console.log(error);
      setIsStaffLoading(false);
    },
  });

  const getStar = num => {
    for (let i = 0; i < Math.floor(num); i++) {
      star.push('⭐');
    }
    return [...star];
  };

  return (
    <Container>
      {isStaffLoading && isDetailLoading ? (
        <>
          <DetailBox
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie[0]?.backdrop_path})`,
              backgroundSize: 'cover',
            }}
          >
            <OpacityBox />
            <MovieImg src={`https://image.tmdb.org/t/p/w500${movie[0]?.poster_path}`} alt={movie[0]?.title} />
            <ExplainBox>
              <Title>{movie[0]?.title}</Title>
              <Box>
                <MainText>평점</MainText>
                {getStar(movie[0]?.vote_average)}
              </Box>
              <Box>
                <MainText>개봉일</MainText>
                <MainText>{movie[0]?.release_date}</MainText>
              </Box>
              <OverviewBox>
                <MainText>줄거리</MainText>
                <Overview>
                  {movie[0]?.overview == ''
                    ? 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
                    : movie[0]?.overview}
                </Overview>
              </OverviewBox>
            </ExplainBox>
          </DetailBox>
          <CastBox>
            <Title>출연진 및 제작진</Title>
            <PersonBox>
              {staffList.map(item => (
                <ProfileBox>
                  <Profile
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                        : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`
                    }
                  />
                  <ProfileText>{item.name}</ProfileText>
                </ProfileBox>
              ))}
            </PersonBox>
          </CastBox>
        </>
      ) : (
        <Loader>
          <Loading />
        </Loader>
      )}
    </Container>
  );
}
