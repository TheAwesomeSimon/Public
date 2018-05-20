import React from 'react';


export default class Item extends React.Component {
    render() {
        return(
            <div className="Item">
                <div className="Song">
                <p>{this.props.track.name}</p>
                <p>By {this.props.track.artist}</p>
                <p>Album {this.props.track.album}</p>
                <img src={this.props.track.image} alt='Album Cover'/>
                </div>
            </div>
        )
    }
}