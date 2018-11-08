import React, { Component } from 'react';

//SCSS
import '../../scss/Sortie.scss';

class Sortie extends Component {
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
                    <div id={this.props.sortie.id} className="confirmation">
                        {/* Confirmée */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortie;
