// #region ----------------------------- Imports --------------------------------------
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../../store';
import {App} from '../../app';

// #endregion

// #region ---------------------------- Component -------------------------------------
const Main: React.StatelessComponent<MainProps> = (props: MainProps) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
      <h1>Hello World</h1>
      <nav>
        {
          isLoggedIn
            ? <div>
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            : <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
        }
      </nav>
      <hr />
      {children}
    </div>
  )
}
// #endregion

// #region -------------------------- Redux Connect -----------------------------------
const mapState = (state: App.State): MainState => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch): MainDispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Main));
// #endregion

// #region ------------------------------ Types ---------------------------------------
type MainProps = MainState & MainDispatch;

type MainState = {
  isLoggedIn: boolean;
  children?: any;
}

type MainDispatch = {
  handleClick: () => void;
}
// #endregion