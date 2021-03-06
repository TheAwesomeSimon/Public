import React from 'react';
import './SearchBar.css';
import button from './button.png';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            type: 'track'
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.searchFor = {
            'Track': 'track',
            'Artist': 'artist',
            'Album': 'album'
        }
    }
    renderTypePicker() {
        return Object.keys(this.searchFor).map(searchForItem => {
            let value = this.searchFor[searchForItem];
            return <li className={this.activeCheck(value)} onClick={this.handleSearchFor.bind(this, value)} key={value}>{value}</li>
        })
    }
    activeCheck(value) {
        if (value === this.state.type) {
            return 'active';
        } else {
            return '';
        }
    }
    handleSearchFor(value) {
        this.setState({ type: value });
    }
    handleSearch() {
        this.props.handleSearch(this.state.query, this.state.type);
    }
    handleChange(e) {
        this.setState({ query: e.target.value });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-bar">
                    <input onChange={this.handleChange} placeholder="Search" />
                    <img src={button} onClick={this.handleSearch} width="2%" height="2%" className="center" alt='' />
                </div>
                <div className="Buttons">
                    <ul>
                        {this.renderTypePicker()}
                    </ul>
                </div>              
            </div>
        )
    }
};