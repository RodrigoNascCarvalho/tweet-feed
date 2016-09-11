import React, { Component } from 'react';

import VisibleTweetList from './../containers/VisibleTweetList';
import TweetSearch from './../containers/TweetSearch';
import OrderMenu from './OrderMenu';
import FilterMenu from './FilterMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="App-search">
      		<TweetSearch />
        </div>
        <FilterMenu />
        <OrderMenu />
        <VisibleTweetList />
      </div>
    );
  }
}

export default App;
