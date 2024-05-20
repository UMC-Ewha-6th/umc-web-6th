import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./screens/RootLayout";
import MainPage from "./screens/MainPage";
import SignUpPage from "./screens/SignUpPage";
import LogInPage from "./screens/LogInPage";
import NowPlayingPage from "./screens/MoviePages/NowPlayingPage";
import PopularPage from "./screens/MoviePages/PopularPage";
import TopRatedPage from "./screens/MoviePages/TopRatedPage";
import UpComingPage from "./screens/MoviePages/UpComing";
import NotFound from "./screens/NotFoundPage";
import MovieDetailPage from "./screens/MovieDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <MainPage />
            </RootLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <RootLayout>
              <SignUpPage />
            </RootLayout>
          }
        />
        <Route
          path="/login"
          element={
            <RootLayout>
              <LogInPage />
            </RootLayout>
          }
        />
        <Route
          path="/nowPlaying"
          element={
            <RootLayout>
              <NowPlayingPage />
            </RootLayout>
          }
        />
        <Route
          path="/popular"
          element={
            <RootLayout>
              <PopularPage />
            </RootLayout>
          }
        />
        <Route
          path="/topRated"
          element={
            <RootLayout>
              <TopRatedPage />
            </RootLayout>
          }
        />
        <Route
          path="/upComing"
          element={
            <RootLayout>
              <UpComingPage />
            </RootLayout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <RootLayout>
              <MovieDetailPage />
            </RootLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
