import React from 'react';
import { Spotify } from '../../util/Spotify'

export default class SearchBar extends React.Component {
    handleClick() {
        Spotify.getAuthorization()
    }
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-bar">
                    <input placeholder="Search"/>
                </div>
                <div className="SubmitButton">
                    <button onClick={this.handleClick}>Let's Go</button>
                </div> 
            </div>
        )
    }
};