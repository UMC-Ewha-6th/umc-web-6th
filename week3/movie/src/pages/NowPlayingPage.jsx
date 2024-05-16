import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const API_KEY = "d3149320f61c4e9ca67239e068d8028d";
const URL = "https://api.themoviedb.org/3/movie/";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`${URL}now_playing?api_key=${API_KEY}`)
    ).json();
    setMovies(json.results);
    setLoading(false);
    console.log("Credit data:", json); //여기까지는 작동 됨
    console.log("Results:", json.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <AppContainer>
      {loading ? (
        <Loading />
      ) : (
        <MoviePage>
          {movies.map((data) => (
            <Movie
              id={data.id}
              backdrop_path={data.backdrop_path}
              title={data.title}
              poster_path={data.poster_path}
              vote_average={data.vote_average}
              release_date={data.release_date}
              overview={data.overview}
            />
          ))}
        </MoviePage>
      )}
    </AppContainer>
  );
};

export default Popular;
const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 가로 여백을 추가하여 각 영화를 가운데 정렬합니다. */
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬합니다. */
  padding: 16px; /* 위아래 여백을 추가합니다. */
  padding-top: 60px;
  justify-content: center;
`;
