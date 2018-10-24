import React, { Component } from 'react';

//SCSS
import '../scss/Login.scss';

import Logo from '../img/icon.jpg';

class Login extends Component {
    render() {
        return (
            <div id="Login">
                <h1>Login</h1>
                <img alt="Logo groupe" src={Logo} />
            </div>
        );
    }
}

export default Login;
