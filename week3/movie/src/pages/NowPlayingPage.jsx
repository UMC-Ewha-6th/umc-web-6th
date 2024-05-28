import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import InfiniteScroll from "../components/InfiniteScroll";

const API_KEY = "d3149320f61c4e9ca67239e068d8028d";
const URL = "https://api.themoviedb.org/3/movie/";

const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const getMovies = async (page) => {
    try {
      setLoadingMore(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0OTMyMGY2MWM0ZTljYTY3MjM5ZTA2OGQ4MDI4ZCIsInN1YiI6IjY2MzMyMGI5OTlkNWMzMDEyNjU2OTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBYeoId4cpixWOlGWUpsZs48qmPvniJhUsOhlmxL8dg`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("데이터를 불러올 수 없습니다.");
      }

      const data = await response.json();
      if (page === 1) {
        // 첫 페이지일 경우 목록을 대체
        setMovies(data.results);
      } else {
        // 그 외의 경우 이전 목록에 추가
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      }
      setHasMore(data.page < data.total_pages);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      getMovies(page);
    }
  }, [page]);

  return (
    <AppContainer>
      {loading && page === 1 ? (
        <Loading />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <MoviePage>
          {movies.map((data) => (
            <Movie
              key={data.id}
              id={data.id}
              backdrop_path={data.backdrop_path}
              title={data.title}
              poster_path={data.poster_path}
              vote_average={data.vote_average}
              release_date={data.release_date}
              overview={data.overview}
            />
          ))}
          {loadingMore && <Loading />}
          {hasMore && (
            <InfiniteScroll loadMore={loadMoreMovies} hasMore={hasMore} />
          )}
        </MoviePage>
      )}
    </AppContainer>
  );
};

export default NowPlaying;

const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px;
  padding-top: 60px;
  box-sizing: border-box;
  padding-bottom: 30px;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  text-align: center;
  width: 100%;
`;
