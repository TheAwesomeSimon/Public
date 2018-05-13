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
    }
    handleLogin() {
        this.props.handleLogin();
    }
    handleClick() {
        Spotify.createPlaylist();
    }
    handleSearch() {
        Spotify.handleSearch(this.state.term, this.state.type).then(tracks => {
            this.setState({})
        })
    }
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-bar">
                    <input placeholder="Search"/>
                </div>
                <div className="SubmitButton">
                    <button onClick={this.handleLogin}>Let's Go</button>
                    <button onClick={this.handleClick}>TEST</button>
                    <button onClick={this.handleSearch}>Search</button>
                </div> 
            </div>
        )
    }
};