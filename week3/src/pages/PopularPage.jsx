import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies.jsx";
import Loading from "../components/Loading.jsx";

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?page=${page}`,
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
        setTotalPages(response.data.total_pages);
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page]); // 페이지가 변경될 때마다 useEffect가 실행되도록 함

  // 다음 페이지로 이동하는 함수
  const nextPage = () => {
    setPage(page + 1); // 현재 페이지를 증가시킴
  };

  // 이전 페이지로 이동하는 함수
  const prevPage = () => {
    setPage(page - 1); // 현재 페이지를 감소시킴
  };

  return (
    <>
      {loading ? (<Loading />) : (
        <>
          <MovieContainer>
            {movieData.map((data, index) => (
              <Movies data={data} key={index} />
            ))}
          </MovieContainer>
          <PaginationContainer>
                {/* 이전 페이지로 이동하는 버튼 */}
                <PageButton onClick={prevPage} disabled={page === 1}>＜</PageButton>
                {/* 현재 페이지 표시 */}
                <CurrentPage>{page}</CurrentPage>
                {/* 다음 페이지로 이동하는 버튼 */}
                <PageButton onClick={nextPage} disabled={page === totalPages}>＞</PageButton>
            </PaginationContainer>
        </>
      )}
    </>
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
`;


const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 30px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#FFD400')};
  margin: 0 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 가운데 정렬 */
  height: 50px; /* 높이 설정 */
  color: white;
  margin-bottom: 20px;
  text-align: center; /* 내부 요소 수직 가운데 정렬 */
  background-color: rgb(33, 35, 72);
`;

const PageButton = styled.p`
  margin: 0 5px;
  font-size: 20px;
  color: ${({ disabled }) => (disabled ? 'black' : 'gray')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const CurrentPage = styled.p`
  margin: 0 5px;
  font-size: 20px;
`;