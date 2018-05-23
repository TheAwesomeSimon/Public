import React from 'react';
import './Item.css';


export default class Item extends React.Component {
    render() {
        return (
            <div className="Item">
                <div className="Item-image" >
                    <img src={this.props.track.image} alt=''/>
                </div>
                <div className="Item-info">
                    <p id="name">{this.props.track.name}</p>
                    <p id="artist">By {this.props.track.artist}</p>
                    <p id="album">Album {this.props.track.album}</p>
                </div>
            </div>
        )
    }
}