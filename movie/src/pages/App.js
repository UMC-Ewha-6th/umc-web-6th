import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainPage from '../pages/main';
import JoinPage from '../pages/join';
import NowPlayingPage from '../pages/nowPlaying';
import PopularPage from '../pages/popular';
import TopRatedPage from '../pages/topRated';
import UpComingPage from '../pages/upComing';
import DetailPage from './detail';
import ErrorPage from './error';
import LoginPage from './login';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/join" Component={JoinPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/nowplaying" Component={NowPlayingPage} />
          <Route path="/popular" Component={PopularPage} />
          <Route path="/toprated" Component={TopRatedPage} />
          <Route path="/upcoming" Component={UpComingPage} />
          <Route path="/movie/:id" Component={DetailPage} />
          <Route path="/*" Component={ErrorPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
