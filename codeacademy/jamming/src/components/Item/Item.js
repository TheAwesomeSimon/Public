import React from 'react';

const items = {
    item: [
        {song: "Hello",
        artist: "Adele",
        album: "21"},
        {song: "Thrift Shop",
        artist: "Macklemore",
        album: "The Heist"}
    ]
};

export default class Item extends React.Component {
    render() {
        return(
            <div className="Item">
                <div className="Song">
                <p>{this.props.results.result.name}</p>
                <p>Artist {this.props.results.result.artist}</p>
                <p>Album {this.props.results.result.album}</p>
                </div>
            </div>
        )
    }
}