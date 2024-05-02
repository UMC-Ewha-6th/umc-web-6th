import React from 'react';
import Counter from './Training/Counter';
import Modal from './Training/Modal';
import Movies from './Movie/pages/Movies';
import Todo from './Todo/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import "./index.css";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;