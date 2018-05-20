import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Spotify } from './util/Spotify';
import Results from './components/Results/Results';
import Playlist from './components/Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      playlist: [],
      playlistName: 'New Playlist'
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.playlistName = this.playlistName.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
  }
  createPlaylist() {
    let tracks = [];
    this.state.playlist.forEach(item => {
      tracks.push(item.uri);
    });
    Spotify.createPlaylist(this.state.playlistName, tracks);
  }
  handleLogin() {
    Spotify.getAuthorization();
  }
  searchSpotify(term, type) {
    Spotify.handleSearch(term, type).then(tracks => {
      this.setState({ results: tracks });
    })
  }
  handlePlus(track) {
    let index = this.state.results.indexOf(track);
    this.state.results.splice(index, 1);
    let arr = this.state.playlist;
    arr.push(track);
    this.setState({ playlist: arr });

  }
  handleMinus(track) {
    let index = this.state.playlist.indexOf(track);
    this.state.playlist.splice(index, 1);
    let arr = this.state.results;
    arr.push(track);
    this.setState({ results: arr}); 
  }
  playlistName(e) {
    this.setState({playlistName: e.target.value});
  }
  render() {
    return (
      <div className="app">
        <h1>jamming</h1>
        <SearchBar handleLogin={this.handleLogin} handleSearch={this.searchSpotify}/>
        <Results results={this.state.results} handlePlus={this.handlePlus}/>
        <Playlist playlist={this.state.playlist} handleMinus={this.handleMinus} createPlaylist={this.createPlaylist} playlistName={this.playlistName}/>
      </div>
    );
  }
}

export default App;