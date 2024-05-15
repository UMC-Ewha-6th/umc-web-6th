import Movie from "./components/Movie/Movie";
import "./App.css";
import {movies} from "./movies.jsx";

function App() {

  return (
    <div className="full_screen">
      {movies.results.map((movie) => (
        <Movie
          key={movie.id}
          poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
          overview={movie.overview}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default App;
