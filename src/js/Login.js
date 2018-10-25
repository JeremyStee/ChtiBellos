import React, { Component } from 'react';

//SCSS
import '../scss/Login.scss';

import Logo from '../img/icon.jpg';

class Login extends Component {
    login = () => {
        console.log('salut');
    };
    render() {
        return (
            <div id="Login">
                <img alt="Logo groupe" src={Logo} />
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <button onClick={this.login} className="btn btn-primary">
                    Connection
                </button>
            </div>
        );
    }
}

export default Login;
