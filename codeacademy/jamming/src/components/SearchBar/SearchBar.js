import React from 'react';
import { Spotify } from '../../util/Spotify'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: 'Hello',
            type: 'track'
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleLogin() {
        this.props.handleLogin();
    }
    createPlaylist() {
        this.props.createPlaylist();
    }
    handleSearch() {
        this.props.handleSearch(this.state.query, this.state.type);
    }
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-bar">
                    <input placeholder="Search"/>
                </div>
                <div className="SubmitButton">
                    <button onClick={this.handleLogin}>Let's Go</button>
                    <button onClick={this.createPlaylist}>TEST</button>
                    <button onClick={this.handleSearch}>Search</button>
                </div> 
            </div>
        )
    }
};