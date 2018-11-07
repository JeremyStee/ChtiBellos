import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//SCSS
import '../scss/App.scss';

//COMPONENTS
import Login from '../js/Login';
import Sorties from '../js/Sorties/Sorties';
import Ajout from './Ajout';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/sorties" component={Sorties} />
                        <Route path="/ajout" component={Ajout} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
