import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Spotify } from './util/Spotify'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleClick() {
    Spotify.createPlaylist();
  }
  handleLogin() {
    Spotify.getAuthorization()
  }
  render() {
    return (
      <div className="app">
        <h1>Yamming</h1>
        <SearchBar handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
