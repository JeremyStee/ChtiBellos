import React, { Component } from 'react';

//SCSS
import '../../scss/Sortie.scss';

class Sortie extends Component {
    handleButtonClick(e) {
        console.log(e.target.value);
    }
    render() {
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return (
            <div className="sortie">
                <div className="leftSide">
                    <h1>{this.props.sortie.titre}</h1>
                    <h2>
                        {this.props.sortie.date.toLocaleDateString(
                            'fr-FR',
                            options
                        )}
                    </h2>
                    <h2>{this.props.sortie.lieu}</h2>
                    <h2>
                        De <span>{this.props.sortie.debut}</span> jusqu'à{' '}
                        <span>{this.props.sortie.fin}</span>
                    </h2>
                    <p>{this.props.sortie.description}</p>
                </div>
                <div className="rightSide">
                    <div className="confirmation">{/* Confirmée */}</div>
                    <div id="btnGrp">
                        <button
                            id="presentBtn"
                            className="btn"
                            value="present"
                            onClick={(e) => {
                                this.handleButtonClick(e);
                            }}
                        >
                            Présent
                        </button>
                        <button
                            id="peutetreBtn"
                            className="btn"
                            value="peutetre"
                            onClick={(e) => {
                                this.handleButtonClick(e);
                            }}
                        >
                            Peut Etre
                        </button>
                        <button
                            id="absentBtn"
                            className="btn"
                            value="absent"
                            onClick={(e) => {
                                this.handleButtonClick(e);
                            }}
                        >
                            Absent
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortie;
