import React, { useState, useEffect } from "react";
import RenderMovies from "../../components/RenderMovies";
import Loader from "../../components/Loader";

const TopRatedPage = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJlMTc4NmMzOTRiNTNiNDE0YjI4OWY0ZWU5YTk4NyIsInN1YiI6IjY2MzM0N2U5ODEzY2I2MDEyMTg2ZTlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A159m_rOX_HnuFPW_aHnMOTiMYyXhQbT3yMamEeazCg'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results); // API 호출 결과를 movies 상태에 저장
        setLoading(false); // 로딩 상태 변경
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // 에러 발생 시 로딩 상태 변경
      });
  }, []); // fetchUrl이 변경될 때마다 useEffect 재실행

  return (
    <>
      {loading ? (
          <Loader />
        ) : (
          <RenderMovies movies={movies} loading={loading}/>
        )
      } 
    </>
  );  
};

export default TopRatedPage;
