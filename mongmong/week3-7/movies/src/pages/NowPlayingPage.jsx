import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movies from "../components/Movies.jsx";
import styled from "styled-components";
import Spinner from '../components/Loading.jsx';
import Navbar from '../components/Navbar.jsx';

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagenum, setPageNum] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: { language: 'en-US', page: pagenum },
      headers: {
        accept: 'application/json',
      }
    };
    try {
      const response = await axios.request(options);
      setMovieData(prevData => [...prevData, ...response.data.results]);
      setPageNum(prevPageNum => prevPageNum + 1);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []); // Empty dependency array ensures it runs only once after initial render

  useEffect(() => {
    const handleScroll = () => {
      if (
        (window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pagenum]);

  
  return (
    <div>
      <Navbar/>
        <MovieContainer>
          {movieData.map((data, index) => (
            <Movies data={data} key={index} />
          ))}
        </MovieContainer>
        {isLoading && <Spinner />}
    </div>
  );
};

export default NowPlayingPage;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`