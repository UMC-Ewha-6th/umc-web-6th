import React from "react";
import RenderMovies from "../../components/RenderMovies";

const NowPlayingPage = () => {
  return <RenderMovies fetchUrl='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' />;
};

export default NowPlayingPage;
