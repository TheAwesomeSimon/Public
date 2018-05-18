import React from 'react';
import Item from '../Item/Item';

export default class Results extends React.Component {
    render() {
        return <div className="Results">
            {this.props.results.map(result =>{
                return <Item result={result}/>;
            })}
        </div>
    }
}