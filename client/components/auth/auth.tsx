// #region ----------------------------- Imports --------------------------------------
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {auth} from '../../store';
import {App} from '../../app';
// #endregion

// #region ---------------------------- Component -------------------------------------

const Auth: React.StatelessComponent<AuthProps> = (props: AuthProps) => {
  const {name, displayName, handleSubmit, error} = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  );
};
// #endregion

// #region -------------------------- Redux Connect -----------------------------------
const mapLogin = (state: App.State): AuthState => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = (state: App.State): AuthState => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = (dispatch): AuthDispatch => { // TODO: resolve Dispatch arg type
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export const Login = connect(mapLogin, mapDispatch)(Auth);
export const Signup = connect(mapSignup, mapDispatch)(Auth);
// #endregion

// #region ------------------------------ Types ---------------------------------------
export type AuthState = {
  name: string;
  displayName: string;
  error: App.Error;
};

export type AuthDispatch = {
  handleSubmit: (evt: any) => void;
};

export type AuthProps = AuthState & AuthDispatch;
// #endregion
