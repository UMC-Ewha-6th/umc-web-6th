import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMovieList } from '../apis/Movie';
import { useQuery } from 'react-query';
import MovieBox from '../components/MovieBox';

const Container = styled.div`
  color: white;
  width: 100vw;
  margin-top: 65px;
`;

const Banner = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 23px;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  gap: 35px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const FindBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Input = styled.input`
  width: 335px;
  height: 35px;
  border: transparent;
  border-radius: 20px;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;

const FindBtn = styled.div`
  width: 25px;
  height: 25px;
  border: transparent;
  border-radius: 100%;
  background-color: rgb(255, 253, 163);
  text-align: center;
`;

const MovieList = styled.div`
  width: 998px;
  height: 500px;
  border: transparent;
  border-radius: 10px;
  background-color: rgb(32, 44, 91);
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px;
  gap: 13px;
  margin-bottom: 40px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5b409;
    border: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`;

export default function MainPage() {
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(search);
      setIsLoading(true);
    }, 500);

    return () => {
      clearTimeout(handler);
      setIsLoading(false);
    };
  }, [search]);

  const movieDetailList = useQuery(['movieDetail', search], () => getMovieList(search), {
    onSuccess: data => {
      console.log(data.results);
      setMovieList(data.results);
    },
    onError: error => {
      console.log(error);
    },
  });

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Banner>
        <div>환영합니다</div>
      </Banner>
      <Box>
        <Title>📽️Find your movies!</Title>
        <FindBox>
          <Input className="input" onChange={onChange} />
          <FindBtn>🔍</FindBtn>
        </FindBox>
        {search.trim() !== '' ? (
          <MovieList>
            {isLoading ? (
              movieList.map(item => (
                <MovieBox
                  link={`/movie/${item.id}`}
                  movieImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  title={item.title}
                  overview={item.overview}
                  star={item.vote_average}
                  isSmall={true}
                />
              ))
            ) : (
              <Loading>데이터를 받아오는 중입니다...</Loading>
            )}
          </MovieList>
        ) : (
          <></>
        )}
      </Box>
    </Container>
  );
}
