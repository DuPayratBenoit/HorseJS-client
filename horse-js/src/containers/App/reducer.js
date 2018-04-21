import {
  REGISTERBUTTON,
  LOGINBUTTON,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

const initialState = {
  userData: null,
  registerPanel: false,
  loginPanel: false,
  userConnected: false,
  registerError: null,
  loginError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERBUTTON:
      return {...state, registerPanel: true}
    case LOGINBUTTON:
      return {...state, loginPanel: true}
    case REGISTER:
      return {...state, userConnected: false, registerError: null};
    case REGISTER_SUCCESS:
      return {...state, registerPanel: false, userConnected: true, registerError: null};
    case REGISTER_ERROR:
      return {...state, userConnected: false, registerError: action.error};
    case LOGIN:
      return {...state, userConnected: false, loginError: null};
    case LOGIN_SUCCESS:
      return {...state, loginPanel: false, userConnected: true, loginError: null};
    case LOGIN_ERROR:
      return {...state, userConnected: false, loginError: null};

    default:
      return state;
  }
};

export default appReducer;
