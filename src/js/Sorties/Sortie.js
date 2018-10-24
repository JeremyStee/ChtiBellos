import React, { Component } from 'react';

//SCSS
import '../../scss/Sortie.scss';

class Sortie extends Component {
    constructor(props) {
        super(props);
        var rdm = Math.floor(Math.random() * Math.floor(5));

        this.state = {
            bgRdm: 'a' + rdm
        };
    }
    componentWillMount() {}
    render() {
        return (
            <div id={this.state.bgRdm} className="sortie">
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
                    <p />
                </div>
            </div>
        );
    }
}

export default Sortie;
