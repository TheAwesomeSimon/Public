import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Spotify } from './util/Spotify';
import Results from './components/Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {name: 'Hello',
        artist: 'Adela',
        album: '21'
        }
      ]
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  createPlaylist() {
    Spotify.createPlaylist();
  }
  handleLogin() {
    Spotify.getAuthorization();
  }
  searchSpotify(term, type) {
    Spotify.handleSearch(term, type);
  }
  render() {
    return (
      <div className="app">
        <h1>Jamming</h1>
        <SearchBar handleLogin={this.handleLogin} createPlaylist={this.createPlaylist} handleSearch={this.searchSpotify}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
