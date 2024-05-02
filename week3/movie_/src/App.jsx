import React from 'react';
import Navbar from './components/Navbar';
import PopularPage from './components/PopularPage';
import AxiosMovie from './AxiosMovie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apiKEY } from './api';

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=en-US&page=1`;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AxiosMovie url={url} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular" element={<PopularPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
