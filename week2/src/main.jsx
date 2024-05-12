import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ModalPage from './pages/modalPage.jsx';
import CountPage from './pages/countPage.jsx';
import MoviePage from './pages/moviePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/count" element={<CountPage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
