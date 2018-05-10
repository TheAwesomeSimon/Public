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
                <p>{items.item.song}</p>
                </div>
            </div>
        )
    }
}

console.log(items.item.song);