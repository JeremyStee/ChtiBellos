import React, { Component } from 'react';

//SCSS
import '../../scss/Sortie.scss';

class Sortie extends Component {
    componentWillMount() {}
    componentDidMount() {
        this.checkConfirmation();
    }
    checkConfirmation() {
        if (!this.props.sortie.confirmation) {
            document.getElementById(this.props.sortie.id).style.display =
                'none';
        } else {
            document.getElementById(this.props.sortie.id).style.display =
                'block';
        }
    }
    render() {
        return (
            <div id={this.props.sortie.imgbackground} className="sortie">
                <div className="leftSide">
                    <h1>{this.props.sortie.titre}</h1>
                    <h2>{this.props.sortie.date}</h2>
                    <h2>
                        De {this.props.sortie.horairedebut} jusqu'à{' '}
                        {this.props.sortie.horairefin}
                    </h2>
                    <h2>{this.props.sortie.lieu}</h2>
                    <p>{this.props.sortie.description}</p>
                </div>
                <div className="rightSide">
                    <div id={this.props.sortie.id} className="confirmation">
                        Confirmée
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortie;
