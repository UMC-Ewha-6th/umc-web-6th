import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Redux 스토어를 만들어둔 파일

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App />
</Provider>
);
