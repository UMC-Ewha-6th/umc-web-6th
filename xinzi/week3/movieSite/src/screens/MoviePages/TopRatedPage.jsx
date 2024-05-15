import React from "react";
import RenderMovies from "../../components/RenderMovies";

const TopRatedPage = () => {
  return <RenderMovies fetchUrl='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' />;
};

export default TopRatedPage;
