import React, { Component } from 'react';
import '../scss/Ajout.scss';
import firebase from '../firebase.js';

class Ajout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titre: '',
            date: '',
            debut: '',
            fin: '',
            lieu: '',
            description: ''
        };
    }
    handleSubmit(e) {
        try {
            e.preventDefault();
            const itemsRef = firebase.database().ref('sorties');
            const item = {
                titre: this.state.titre,
                date: this.state.date,
                debut: this.state.debut,
                find: this.state.fin,
                lieu: this.state.lieu,
                description: this.state.description
            };
            if (item.titre !== '') {
                itemsRef.push(item);
            }
        } catch (error) {
            console.log("Erreur lors de l'ajout en base");
        }
    }

    render() {
        return (
            <div id="Ajout">
                <h1>Ajouter une sortie</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Titre :
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="titre"
                                name="titre"
                                placeholder="Ronde de St Jans"
                                onChange={(e) =>
                                    this.setState({ titre: e.target.value })
                                }
                                value={this.state.titre}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Date :
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="date"
                                name="date"
                                placeholder="25 Octobre 2018"
                                onChange={(e) =>
                                    this.setState({ date: e.target.value })
                                }
                                value={this.state.date}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Début :
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="debut"
                                name="debut"
                                placeholder="11h"
                                onChange={(e) =>
                                    this.setState({ debut: e.target.value })
                                }
                                value={this.state.debut}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Fin :</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="fin"
                                name="fin"
                                placeholder="17h"
                                onChange={(e) =>
                                    this.setState({ fin: e.target.value })
                                }
                                value={this.state.fin}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Lieu :
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="lieu"
                                name="lieu"
                                placeholder="St Jans Cappel"
                                onChange={(e) =>
                                    this.setState({ lieu: e.target.value })
                                }
                                value={this.state.lieu}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Description :
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Animation de la course"
                                onChange={(e) =>
                                    this.setState({
                                        description: e.target.value
                                    })
                                }
                                value={this.state.description}
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default Ajout;
