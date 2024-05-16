import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useQuery } from 'react-query';
import styled from "styled-components";
import Movies from "../components/Movies.jsx";
import Spinner from '../components/Loading.jsx';
import Navbar from '../components/Navbar.jsx';

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagenum, setPageNum] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    console.log(pagenum);
    fetchMovieData();
  }, [pagenum]); // Trigger useEffect whenever pagenum changes

  const fetchMovieData = () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: { language: 'en-US', page: pagenum },
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
        setIsLoading(false);
      });
  };



  return (
    <BlueContainer>
      <Navbar/>
      {isLoading ? (
        <Spinner /> // Render Loading component if isLoading is true
      ) : (
        <div>
        <MovieContainer>
          {movieData.map((data, index) => (
            <Movies data={data} key={index} />
          ))}
        </MovieContainer>
        <BottomContainer>
          <Button style={{ color: (pagenum == 1) ? '#525252' : 'white',
            cursor: (pagenum == 1) ? null : 'pointer'
          }} 
          disabled={(pagenum == 1)} 
          onClick={()=> setPageNum(pagenum-1)}>{"<"}</Button>
          <Text>{pagenum}</Text>
          <Button style={{ cursor: 'pointer'}} 
          onClick={()=> setPageNum(pagenum+1)}>{">"}</Button>
        </BottomContainer>
        </div>
      )}
    </BlueContainer>
  );
};

export default PopularPage;

const BlueContainer = styled.div`
  background-color: rgb(33, 35, 72);
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center the container horizontally */
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: none;
`;

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