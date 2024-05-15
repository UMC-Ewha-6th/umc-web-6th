import { useState } from "react";
import PropTypes from "prop-types";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./Movie.css";

function Movie({ poster_path, title, overview, vote_average }) { 

  const [showDetail, setShowDetail] = useState(false);
  
  const openDetail = () => setShowDetail(true);
  const closeDetail = () => setShowDetail(false);

  return (
    <div className="movie_wrapper" onMouseOver={openDetail} onMouseOut={closeDetail}>
      <img className="img" src={poster_path} alt={title} />  
      <h2 className="title">{title}</h2>  
      <span className="vote_average">{vote_average}</span>

      {showDetail && <MovieDetail title={title} overview={overview}/>}
    </div>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired
};

export default Movie;