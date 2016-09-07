import React, { Component } from 'react';

import TweetList from './TweetList';
import TweetSearch from './TweetSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetSearch />
        <TweetList />
      </div>
    );
  }
}

export default App;
