import React, { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import Loading from '../Loading';
import { useQuery } from 'react-query';
import { 
  AppContainer, 
  Pagination, 
  PageButton1, 
  PageButton2, 
  CurrentPage, 
  PgContainer 
} from '../pageStyle';

const API_KEY = '560edcab022391706f07d9e49f92af34';

export default function Popularpage() {

  const [page, setPage] = useState(1);

  const getPopularData = async (page) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`; 
    const response = await fetch(url);
    if (!response.ok) {
      console.error(error);
    }
    return response.json();
  };

  const { data, isLoading, isSuccess } = useQuery(['popularMovies', page], () => getPopularData(page)); // queryKey & queryFn


  const goPrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const goNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };


  return (
    <>
      <AppContainer>
        {isLoading ? (
          <Loading />
        ) : isSuccess && data ? (
          <>
            {data.results.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                release_date={item.release_date}
              />
            ))}
          </>
        ) : null}
      </AppContainer>
      <PgContainer>
        <Pagination>
          <PageButton1 onClick={goPrevPage} page={page}>&lt;</PageButton1>
          <CurrentPage>{page}</CurrentPage>
          <PageButton2 onClick={goNextPage}>&gt;</PageButton2>
        </Pagination>
      </PgContainer>
    </>
  );
}

