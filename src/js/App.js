import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//SCSS
import '../scss/App.scss';

//COMPONENTS
import Login from '../js/Login';
import Sorties from '../js/Sorties';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/sorties" component={Sorties} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
