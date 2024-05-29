import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import Movies from "../components/Movies.jsx";
import styled from "styled-components";
import Loading from "../components/Loading.jsx";

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [loadingNextPage, setLoadingNextPage] = useState(false); // 다음 페이지 로딩 중 여부
  const observer = useRef();

  useEffect(() => {
    // Intersection Observer 생성
    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.5 // 페이지의 50%가 보이면 콜백 함수 호출
    });
  }, []);

  useEffect(() => {
    fetchData(page); // 페이지가 변경될 때마다 데이터 요청
  }, [page]);

  const fetchData = (pageNumber) => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/now_playing?page=${pageNumber}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTI2NmZmNWQ3Yzg5MjMzYTczNjY4M2JjOGM0MDY1NiIsInN1YiI6IjY2MzIwOWM2OTlkNWMzMDEyYzU2MTlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qOb1Crs3dV9TzXJdzFn5T4tKWZ1kyMwqE0ZAGCYbKY'
      }
    };

    axios.request(options)
      .then(function (response) {
        setMovieData(prevData => [...prevData, ...response.data.results]); // 이전 데이터와 새로운 데이터 합치기
        setTotalPages(response.data.total_pages);
        setLoading(false);
        setLoadingNextPage(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) { // 페이지의 50%가 보일 때
      if (page < totalPages && !loadingNextPage) { // 다음 페이지가 있고 로딩 중이 아닐 때
        setLoadingNextPage(true); // 다음 페이지 로딩 중 상태로 변경
        setPage(page + 1); // 다음 페이지로 이동
      } else {
        // 다음 페이지가 없거나 로딩 중인 경우
        if (observer.current) {
          observer.current.disconnect(); // IntersectionObserver 해제
        }
      }
    }
  };

  useEffect(() => {
    // observer 요소 설정
    const observerElement = document.getElementById('observer');
    if (observerElement && observer.current) {
      observer.current.observe(observerElement);
    }
    // observer 해제
    return () => {
      if (observerElement && observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observer]);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <MovieContainer>
            {movieData.map((data, index) => (
              <Movies data={data} key={index} />
            ))}
          </MovieContainer>
          <ObserverDiv id="observer"></ObserverDiv>
          {loadingNextPage && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default NowPlayingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;

const ObserverDiv = styled.div`
  height: 20px;
  margin: 20px 0;
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
