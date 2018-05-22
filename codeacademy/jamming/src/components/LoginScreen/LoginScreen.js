import React from 'react';
import connectButton from './connect_button.png';

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
            <h1>Jamming</h1>
            <p>Sign up or log in to your Spotify account...</p>
                <img onClick={this.handleLogin} src={connectButton} width="15%" height="15%" class="center" alt="Connect with Spotify" />
            
            </div>
        );
    }
}