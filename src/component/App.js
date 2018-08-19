import React, { Component } from 'react';
import SearchBar from '../container/searchbar';
import WeatherList from '../container/weather-list';


class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}

export default App;
