import React from 'react';
import Item from '../Item/Item';
import saveButton from './save-icon.png';
import './Playlist.css';

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
                <input onChange={this.playlistName} placeholder="New Playlist" />
                <img src={saveButton} onClick={this.createPlaylist} height="4%" width="4%" class="save" alt="Save to Spotify" />
                {this.props.playlist.map(song => {
                    return (
                        <div className="Playlist-box">
                            <div className="Minus" >
                                <button id="buttonMinus" onClick={() => this.handleMinus(song)}>-</button>
                            </div>
                            <div className="PlaylistItem" key={song.id}>
                                <Item track={song} />
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}