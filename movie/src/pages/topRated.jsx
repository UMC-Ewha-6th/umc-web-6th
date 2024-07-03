import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getTopRatedList } from '../apis/Movie';
import MovieBox from '../components/MovieBox';
import Loading from '../components/Loading';

const Container = styled.div`
  color: white;
  width: 100%;
  margin-top: 65px;
`;

const Box = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40vh;
`;

const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  gap: 15px;
`;

const LeftButton = styled.div`
  cursor: pointer;
  visibility: ${props => (props.$isBelow ? 'hidden' : 'visible')};
`;

const RightButton = styled.div`
  cursor: pointer;
  visibility: ${props => (props.$isUpper ? 'hidden' : 'visible')};
`;

export default function TopRatedPage() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(1);

  const topRatedList = useQuery({
    queryKey: ['topRatedMovie', page],
    queryFn: () => getTopRatedList(page),
    onSuccess: data => {
      console.log(data.results);
      setMovieList(data.results);
      setTotalPage(data.total_pages);
      setIsLoading(true);
    },
    onError: error => {
      console.log(error);
      setIsLoading(false);
    },
  });

  const onClickLeftBtn = () => {
    setPage(old => Math.max(old - 1, 1));
  };

  const onClickRighttBtn = () => {
    setPage(old => Math.min(old + 1, totalpage));
  };

  return (
    <Container>
      {isLoading ? (
        <>
          <Box>
            {movieList.map((item, idx) => {
              return (
                <div key={idx}>
                  <MovieBox
                    link={`/movie/${item.id}`}
                    movieImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title}
                    overview={item.overview}
                    star={item.vote_average}
                  />
                </div>
              );
            })}
          </Box>
          <Pagination>
            <LeftButton $isBelow={page === 1 ? true : false} onClick={onClickLeftBtn}>
              〈
            </LeftButton>{' '}
            {page}
            <RightButton $isUpper={page === totalpage ? true : false} onClick={onClickRighttBtn}>
              〉
            </RightButton>
          </Pagination>
        </>
      ) : (
        <Loader>
          <Loading />
        </Loader>
      )}
    </Container>
  );
}
