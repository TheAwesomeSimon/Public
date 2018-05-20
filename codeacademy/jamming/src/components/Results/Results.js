import React from 'react';
import Item from '../Item/Item';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
    }
    handlePlus(track) {
        this.props.handlePlus(track);
    }
    render() {
        return <div className="Results">
            {this.props.results.map(result =>{
                return (
                    <div className="Test" key={result.id}>
                    <Item track={result}/>
                    <button onClick={() => this.handlePlus(result)}>+</button>
                    </div>
                );
            })}
        </div>
    }
}