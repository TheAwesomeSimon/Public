import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Spotify } from './util/Spotify';
import Results from './components/Results/Results';
import Playlist from './components/Playlist/Playlist';
import LoginScreen from './components/LoginScreen/LoginScreen';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      playlist: [],
      playlistName: 'New Playlist',

    };
    this.handleLogin = this.handleLogin.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.playlistName = this.playlistName.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }
  createPlaylist() {
    let tracks = [];
    this.state.playlist.forEach(item => {
      tracks.push(item.uri);
    });
    Spotify.createPlaylist(this.state.playlistName, tracks);
    this.setState({ playlist: [] });
  }
  handleLogin() {
    Spotify.getAuthorization().then(something => {
      this.setState({ loggedIn: true });
    });
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
    this.setState({ Playlist: arr });
  }
  playlistName(e) {
    this.setState({ playlistName: e.target.value });
  }
  checkLogin() {
    /* I really wanted a login screen and this is the simplest solution I could think of. If jamming
    was deployed on the web, the spoitfy login would redirect to new screen and this wouldn't be needed */
    try {
      return (window.location.href.split('#')[1].split('=')[0] === 'access_token');
    } catch (err) {
      return false
    }
  }
  render() {
    if (this.checkLogin() === false) {
      return (
        <div className="app">
          <LoginScreen handleLogin={this.handleLogin} />
        </div>
      );
    } else {
      //renders just the searchbar - nothing is in the results nor playlist
      if ((this.state.results).length === 0 && (this.state.playlist).length === 0)  {
        return (
          <body id="body">
            <div className="app">
              <h1>Jamming</h1>
              <div className="Searchbar">
                <SearchBar handleSearch={this.searchSpotify} />
              </div>
            </div>
          </body>
        );
      } else {
        //renders results and playlist
        return (
          <body id="body">
            <div className="app">
              <h1>Jamming</h1>
              <div className="Searchbar">
                <SearchBar handleSearch={this.searchSpotify} />
              </div>
>
                <div className="Results" >
                  <Results results={this.state.results} handlePlus={this.handlePlus} />
                </div>
                <div className="Playlist" >
                  <Playlist playlist={this.state.playlist} handleMinus={this.handleMinus} createPlaylist={this.createPlaylist} playlistName={this.playlistName} />

              </div>
            </div>
          </body>
        );
      }
    }
  }
}

export default App;