import React, { Component } from 'react';
import './styles.css';

export class Register extends Component {
    render() {
    //this.props.authCallback(true, true, false);
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>S'inscrire</h1>
                <h3>Utilisateur</h3>
                <input type="text" name="user"/>
                <h3>Email</h3>
                <input type="text" name="email"/>
                <h3>Mot de passe</h3>
                <input type="text" name="passwd"/>
                <h3>Confirmer le mot de passe</h3>
                <input type="text" name="confirm"/>
                <button onClick={this.props.registerSuccess}>Ok</button>
            </div>
        </div>
      );
    }
  };