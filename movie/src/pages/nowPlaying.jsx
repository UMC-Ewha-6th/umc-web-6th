import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { getNowPlayingList } from '../apis/Movie';
import MovieBox from '../components/MovieBox';
import Loading from '../components/Loading';

const Container = styled.div`
  color: white;
  width: 100vw;
  margin-top: 65px;
`;

const Movie = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 1260px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Loader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 40vh;
`;

export default function NowPlayingPage() {
  const { data, isLoading, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery(
    /** */
    ['nowplayingMovie'],
    ({ pageParam = 1 }) => getNowPlayingList(pageParam),
    {
      getNextPageParam: lastPage => {
        const nextPage = lastPage.page + 1;
        return nextPage > lastPage.total_pages ? false : nextPage;
      },
    },
  );

  useEffect(() => {
    console.log(data);
  });

  return (
    <Container>
      <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
        {isLoading ? (
          <Loader>
            <Loading />
          </Loader>
        ) : (
          <Movie>
            {' '}
            {/**hasMore: 데이터가 더 있는지, loadMore: 스크롤 내리면 실행될 함수 */}
            <Box>
              {isSuccess &&
                /**data가 pages와 pageParam으로 이루어져있음 */
                data.pages.map((page, pageIndex) =>
                  page.results.map((item, idx) => {
                    return (
                      <div key={`${pageIndex}-${idx}`}>
                        <MovieBox
                          link={`/movie/${item.id}`}
                          movieImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          title={item.title}
                          overview={item.overview}
                          star={item.vote_average}
                        />
                      </div>
                    );
                  }),
                )}
            </Box>
          </Movie>
        )}
      </InfiniteScroll>
    </Container>
  );
}
