import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

// 각 페이지 컴포넌트 import
//import Signup from './components/Signup';
//import Popular from './components/PopularPage';
//import NowPlaying from './components/NowPlayingPage';
//import TopRated from './components/TopRatedPage';
//import Upcoming from './components/UpComing';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route path="/popular" component={Popular} />
          <Route path="/now-playing" component={NowPlaying} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
