import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import "./index.css";
import {Route, Routes} from "react-router-dom";
import PopularPage from "./pages/PopularPage.jsx";
import NowPlayingPage from "./pages/NowPlayingPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpComing from "./pages/UpComing.jsx";
import NotFound from "./pages/NotFound.jsx";

import styled from "styled-components";
import MovieDetail from "./pages/MovieDetail.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Container>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/popular" element={<PopularPage/>}/>
          <Route path="/nowplaying" element={<NowPlayingPage/>}/>
          <Route path="/toprated" element={<TopRatedPage/>}/>
          <Route path="/upcoming" element={<UpComing/>}/>
          <Route path="/moviedetail/:id" element={<MovieDetail/>}/>
          <Route path="/*" element={<NotFound />} /> 
        </Routes>
      </Container>
      <Footer/>
    </>
  )
}

export default App

const Container = styled.div`
  margin: 25px 0 15px 0;
`