import React from "react";
import RenderMovies from "../../components/RenderMovies";

const UpcomingPage = () => {
  return <RenderMovies fetchUrl='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' />;
};

export default UpcomingPage;
