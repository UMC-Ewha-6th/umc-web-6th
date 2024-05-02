import React, {useState} from 'react'

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {

    const [hide, setHide] = useState(true);
  
    const handleMouseOver = () => {
      setHide(false);
      console.log('mouseON');
    }
  
    const handleMouseOut = () => {
      setHide(true);
      console.log('mouseOUT');
    }
    
    return (
        <div className="movie-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <div className="movie-info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
            <div className={`movie-overview ${hide ? 'hide' : ''}`}>
                <h4>{props.title}</h4><br/>
                <p>{props.overview}</p>
            </div>
        </div>
        );
}