import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovie = (type) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelRequest = false;

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=ko&page=2`;

        const response = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY`,
          },
        });

        if(!cancelRequest) {
          setMovieData(response.data);
          setIsLoading(false);
        }

        if (!response.data) {
          throw new Error('No data received');
        }

      } catch (error) {
        if(!cancelRequest){
          console.error('Error fetching data:', error);
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      
    }
  }, [type]);

  return { isLoading, movieData, error};
};

export default useFetchMovie;