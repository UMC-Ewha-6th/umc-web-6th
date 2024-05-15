import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSearchMovie = (search) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let debounceTimer;
    const delay = 300;
    
    const fetchData = async () => {
      if (!search) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko-KR&page=1`;

        const response = await axios.get(url,
          {
            params: {
              query: search,
            },
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY`,
            },
          }
        );
        setSearchResults(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchData, delay);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return { searchResults, loading, error };
};

export default useFetchSearchMovie;