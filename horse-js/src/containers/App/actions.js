import {
  REGISTERBUTTON,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGINBUTTON,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';


export const registerButton = () => ({
  type: REGISTERBUTTON,
});

export const register = (userData) => ({
  type: REGISTER,
  userData,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerError = (error) => ({
  type: REGISTER_ERROR,
  error,
});


export const loginButton = () => ({
  type: LOGINBUTTON,
});

export const login = (userData) => ({
  type: LOGIN,
  userData,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});