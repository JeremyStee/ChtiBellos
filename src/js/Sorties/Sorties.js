import React, { Component } from 'react';

//COMPONENTS
import Sortie from './Sortie';
//JSON
import JSON from '../../donnees';

class Sorties extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sorties: []
        };
    }
    componentWillMount() {
        this.DataToObject();
    }
    DataToObject() {
        var rows = [];
        var i = 0;

        //Conversion du json en propriétés en tableau
        let ressourceAsArray = Object.keys(JSON.sorties).map(
            (pid) => JSON.sorties[pid]
        );

        ressourceAsArray.forEach((sortie) => {
            sortie.date = new Date(sortie.date);
            rows.push(
                <li key={sortie.id}>
                    <Sortie sortie={sortie} id={i} />
                </li>
            );
            i++;
        });
        this.setState({ sorties: rows });
    }
    render() {
        return (
            <div id="Sorties">
                <h1>Prochaines Sorties</h1>
                <ul>{this.state.sorties}</ul>
            </div>
        );
    }
}

export default Sorties;
