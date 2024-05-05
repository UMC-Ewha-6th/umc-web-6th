import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies.jsx";
import Spinner from '../components/Loading.jsx';

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzAwOTA4NGIyNTY1ZmFmNzYxNDFmNGJhMmYyZGZlZiIsInN1YiI6IjY2Mzc3MTY4YzYxNmFjMDEyMjFiMDhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-DcguU9teC_FIkbPEMCSCq08miKo9TGUZwwb7VgmhE'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])
  return (
    <div>
      {isLoading ? (
        <Spinner /> // Render Loading component if isLoading is true
      ) : (
        <MovieContainer>
          {movieData.map((data, index) => (
            <Movies data={data} key={index} />
          ))}
        </MovieContainer>
      )}
    </div>
  );
};

export default PopularPage;

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