import React from 'react';
import Item from '../Item/Item';
import './Results.css';

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
            {this.props.results.map(result => {
                return (
                    <div className="Result" >
                        <div className="Plus" >
                            <button onClick={() => this.handlePlus(result)}>+</button>
                        </div>
                        <div className="ResultItem" key={result.id}>
                            <Item track={result} />
                        </div>


                    </div>
                );
            })}
        </div>
    }
}