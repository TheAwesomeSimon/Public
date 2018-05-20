import React from 'react';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        this.props.handleLogin();
    }
    render() {
        return (
            <div className="LoginScreen">
            <h1>jamming</h1>
            <p>Sign up or log in to your Spotify account...</p>
            <button onClick={this.handleLogin}>Let's Go!</button>
            </div>
        );
    }
}