import PropTypes from "prop-types";
import "./MovieDetail.css";

function MovieDetail({ title, overview}) { 

  return (
    <div className="detail_wrapper">
      <h2 className="detail_title">{title}</h2>
      <p className="detail_overview">{overview}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDetail;