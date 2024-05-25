import React from 'react';
import Movie from '../../components/Movie';
import { AppContainer } from '../pageStyle';
import Loading from '../Loading';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

const API_KEY = '560edcab022391706f07d9e49f92af34';


export default function Nowplayingpage() {

  const getNowplayingData = async ({ pageParam = 1 }) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${pageParam}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(error);
    }
    return response.json();
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery (
    'nowPlaying', // queryKey : 쿼리를 구별하여 캐시를 관리하는 이름
    getNowplayingData, // queryFn : 쿼리가 데이터를 요청할 때 사용할 함수
    {
      getNextPageParam : lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage <= lastPage.total_pages ? nextPage : false;
      },
    }
  );

  const nowPlaying = data?.pages.flatMap(page => page.results);

  return (
    <>
      {isLoading ? (
        <Loading/>
         ) : (
        <InfiniteScroll 
          loadMore={fetchNextPage} // 다음 페이지를 불러옴
          hasMore={hasNextPage} // 다음 페이지가 있는 여부
        >
          <AppContainer>
            {nowPlaying.map((item) => (
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
          </AppContainer>
        </InfiniteScroll>
      )}
    </>

  );
}
