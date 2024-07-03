import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './main';
import TodoPage from './todo';
import Header from '../components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/todo" Component={TodoPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
