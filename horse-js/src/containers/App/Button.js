import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginButton, registerButton } from './actions';

export default class Button extends Component {
    constructor (props) {
        super(props)
        this.state = {
          isActive: false
        };
    }

    handleClick (e) {
        e.preventDefault();
        let active = !this.state.isActive;
        this.setState({ isActive: active });
    
          if(this.props.label === "Register"){
            registerButton();
          }
          if(this.props.label === "Login"){
            loginButton()
          }
      }
    
      render() {
        let hbClasses = headerButtonContext + this.state.isActive;
        return (
          <div className={headerButtonWrapper}>
            <button className={hbClasses} onClick={this.handleClick.bind(this)}>{this.props.label}</button>
          </div>
        );
    }
}