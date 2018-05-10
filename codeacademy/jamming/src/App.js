import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Jamming</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
