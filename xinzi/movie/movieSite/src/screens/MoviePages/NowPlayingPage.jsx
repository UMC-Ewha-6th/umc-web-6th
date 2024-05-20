import React, { useEffect, useState, useRef } from "react";
import RenderMovies from "../../components/RenderMovies";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const loaderRef = useRef(null);
  //const [cachedMovies, setCachedMovies] = useState([]);

  const throttle = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args);
          timeoutId = null;
        }, delay);
      }
    };
  };

  const throttledLoadMore = throttle(() => {
    if (!reachedEnd && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, 1000); // 일정 주기(여기서는 1초)로 스크롤 이벤트를 제어

  useEffect(() => {
    window.addEventListener("scroll", throttledLoadMore);
    return () => {
      window.removeEventListener("scroll", throttledLoadMore);
    };
  }, [throttledLoadMore]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
        const data = await response.json();

        if (data.results.length > 0) {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
          setPage((prevPage) => prevPage + 1);
        } else {
          setReachedEnd(true);
        }
        setLoading(false);
        
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (!reachedEnd) {
      setLoading(true);
      fetchMovies();
    }
  }, [page, reachedEnd]);

  return <RenderMovies movies={movies} loading={loading} loaderRef={loaderRef}/>
};

export default NowPlayingPage;
