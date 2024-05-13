import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetailPage';



// 각 페이지 컴포넌트 import
import Popular from './pages/PopularPage';
import Signup from './pages/Signup';
import NowPlaying from './pages/NowPlayingPage';
import TopRated from './pages/TopRatedPage';
import Upcoming from './pages/UpComing';
import MainPage from './pages/MainPage';

const App = () => {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:movieName" element={<MovieDetail />} />
      </Routes>
      <Footer />

  </>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  );
};
           
export default App;

