import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Nowplayingpage from "./pages/Nowplayingpage/Nowplayingpage";
import Popularpage from "./pages/Popularpage/Popularpage";
import Topratedpage from "./pages/Topratedpage/Topratedpage";
import Upcomingpage from "./pages/Upcomingpage/Upcomingpage";
import NotFoundpage from "./pages/NotFoundpage/NotFoundpage";
import SignUppage from "./pages/SignUppage/SignUppage";
import MovieDetailpage from "./pages/MovieDetailpage/MovieDetailpage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(29, 24, 87);
    color: white;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="rootWrap">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/nowplaying" element={<Nowplayingpage />} />
            <Route path="/popular" element={<Popularpage />} />
            <Route path="/toprated" element={<Topratedpage />} />
            <Route path="/upcoming" element={<Upcomingpage />} />
            <Route path="/*" element={<NotFoundpage />} />
            <Route path="/signup" element={<SignUppage />} />
            <Route path ="/movie/:id" element={<MovieDetailpage />} />​
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
