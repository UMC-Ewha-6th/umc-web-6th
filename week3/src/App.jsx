import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PopularPage from "./pages/PopularPage.jsx";
import NowPlayingPage from "./pages/NowPlayingPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpComing from "./pages/UpComing.jsx";
import NotFound from "./pages/NotFound.jsx";
import styled from "styled-components";
import MovieDetail from './pages/MovieDetail';
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";


function App() {


  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/moviedetail/:id" element={<MovieDetail/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 25px 0 15px 0;
`;