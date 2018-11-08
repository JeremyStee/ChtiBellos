import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import Sortie from './Sortie';
//JSON
import firebase from '../../firebase.js';

class Sorties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortiesRender: []
        };
    }
    componentWillMount() {
        this.getDataFromBase();
    }
    getDataFromBase() {
        firebase
            .database()
            .ref('sorties')
            .on(
                'value',
                (snapshot) => {
                    if (snapshot.val() !== null) {
                        let rows = [];
                        let i = 0;
                        let ressourceAsArray = Object.keys(snapshot.val()).map(
                            (pid) => snapshot.val()[pid]
                        );
                        ressourceAsArray.forEach((sortie) => {
                            sortie.date = new Date(sortie.date);
                        });
                        ressourceAsArray.sort(this.sortArrayByDate);
                        ressourceAsArray.forEach((sortie) => {
                            rows.push(
                                <li key={i}>
                                    <Sortie sortie={sortie} id={i} />
                                </li>
                            );
                            i++;
                        });
                        this.setState({ sortiesRender: rows });
                    }
                },
                (error) => {
                    console.log('Error : ' + error.code);
                }
            );
    }
    sortArrayByDate(a, b) {
        return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
    }
    componentWillUnmount() {
        firebase
            .database()
            .ref('sorties')
            .off('value');
    }
    render() {
        return (
            <div id="Sorties">
                <h1>Prochaines Sorties</h1>
                <Link to="/ajout">
                    <button onClick={this.login} className="btn btn-primary">
                        Ajouter une sortie
                    </button>
                </Link>
                <ul>{this.state.sortiesRender}</ul>
            </div>
        );
    }
}

export default Sorties;
