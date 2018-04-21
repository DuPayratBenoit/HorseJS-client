import React, { Component } from 'react';
import './styles.css';

export class Login extends Component {
    render() {
    //this.props.authCallback(true, false, true);
      return (
        <form onSubmit={this.props.closePopup}>
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>Authentification</h1>
                    <h3>Utilisateur</h3>
                    <input type="text" name="user"/>
                    <h3>Mot de Passe</h3>
                    <input type="text" name="passwd"/>
                    <input type="submit" value="Ok"/>
                </div>
            </div>
        </form>
      );
    }
  };