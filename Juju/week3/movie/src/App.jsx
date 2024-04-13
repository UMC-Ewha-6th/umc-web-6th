import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nowplayingpage from "./Components/Nowplayingpage/Nowplayingpage";
import Popularpage from "./Components/Popularpage/Popularpage";
import Mainpage from "./Components/Mainpage/Mainpage";
import NavBar from "./Components/NavBar/NavBar";
import Topratedpage from "./Components/Topratedpage/Topratedpage";
import Upcoming from "./Components/Upcoming/Upcoming";

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/popular" element={<Popularpage />} />
        <Route path="/nowplaying" element={<Nowplayingpage />} />
        <Route path="/toprated" element={<Topratedpage />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </>
  );
}

export default App;