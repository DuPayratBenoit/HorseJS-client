import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Register } from './register';
import { Login } from './login';

import { register, login, registerButton, loginButton, registerSuccess, loginSuccess } from './actions';

import logo from './images/logo.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      registerPanel: false,
      loginPanel: false,
      userConnected: false,
      registerError: null,
      loginError: null,
    };
  }

  componentWillMount() {
  }

  /*authCallback = (uc, reg, log) => {
    this.setState({...this.state, userConnected: uc, registerPanel: reg, loginPanel: log})
  }*/

  render() {
    const { registerPanel, loginPanel, userConnected } = this.props;
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Bienvenue sur HorseJS !</h2>
          { !userConnected ?
          <div>
            <button className="register-button" onClick={this.props.registerButton}>S'inscrire</button>
            <button className="login-button" onClick={this.props.loginButton}>Se connecter</button>
          </div>
          : null
          }
        </div>
        { loginPanel ?
          <Login authCallback={ this.authCallback }/>
          : null
        }
        { registerPanel ?
          <Register /*authCallback={ this.authCallback }*//>
          : null
        }
        <p className="app-intro">
          Ajouter ici des trucs, genre les jeux avec des règles.
        </p>
      </div>
    );
  }
}

App.defaultProps = {
};

App.propTypes = {
};

const mapStateToProps = state => {
  return {
    loginPanel: state.containers.appReducer.loginPanel,
    registerPanel: state.containers.appReducer.registerPanel,
    userConnected: state.containers.appReducer.userConnected,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    register: userData => dispatch(register(userData)),
    login: userData => dispatch(login(userData)),
    registerButton: () => dispatch(registerButton()),
    loginButton: () => dispatch(loginButton()),
    registerSuccess: () => dispatch(registerSuccess()),
    loginSuccess: () => dispatch(loginSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
