import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            type: 'track'
        };

        this.handleLogin = this.handleLogin.bind(this);
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
        this.setState({type: value});
    }
    handleLogin() {
        this.props.handleLogin();
    }
    handleSearch() {
        this.props.handleSearch(this.state.query, this.state.type);
    }
    handleChange(e) {
        this.setState({query: e.target.value});
    }
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-bar">
                    <input onChange={this.handleChange} placeholder="Search"/>
                </div>
                <div className="Buttons">
                    <ul>
                        {this.renderTypePicker()}
                    </ul>
                    <button onClick={this.handleLogin}>Let's Go</button>
                    <button onClick={this.handleSearch}>Search</button>
                </div> 
            </div>
        )
    }
};