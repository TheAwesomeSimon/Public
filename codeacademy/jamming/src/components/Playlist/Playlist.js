import React from 'react';
import Item from '../Item/Item';

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleMinus = this.handleMinus.bind(this);
        this.playlistName = this.playlistName.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
    }
    handleMinus(track) {
        this.props.handleMinus(track)
    }
    playlistName(e) {
        this.props.playlistName(e)
    }
    createPlaylist() {
        this.props.createPlaylist();
    }
    render() {
        return (
            <div className="Playlist">
            <input onChange={this.playlistName} placeholder="New Playlist"/>
            <button onClick={this.createPlaylist}>Create Playlist</button>
            {this.props.playlist.map(song => {
                return(
                    <div className="PlaylistItem" key={song.id}>
                    <Item track={song}/>
                    <button onClick={() => this.handleMinus(song)}>-</button>
                    </div>
                )
            })}
            </div>
        )
    }
}