import React from 'react';

export default class SearchBar extends React.Component {
    handleClick() {
        alert("Hello");
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