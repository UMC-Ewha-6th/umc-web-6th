import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Movies from "../components/Movies.jsx";
import styled from "styled-components";
import Loading from "../components/Loading.jsx";

const UpComing = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data.results)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])
  return (
    <>
    {loading ? (<Loading />) : (
      <MovieContainer>
      {movieData.map((data, index) => (
        <Movies data={data} key={index}/>
      ))}
    </MovieContainer>
    )}
    </>
  );
};

export default UpComing;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`