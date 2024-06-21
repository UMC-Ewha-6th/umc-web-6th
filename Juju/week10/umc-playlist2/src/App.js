import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartList from './components/CartList';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CartList />
      </div>
    </Provider>
  );
};

export default App;
