// #region ----------------------------- Imports --------------------------------------
import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import history from './history';
import { Main, Login, Signup, Home } from './components';
import {me} from './store';
import {App} from './app';
// #endregion

// #region ---------------------------- Component -------------------------------------
class Routes extends Component<RoutesProps, App.State> {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const {isLoggedIn} = this.props;

    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  <Route path="/home" component={Home} />
                </Switch>
            }
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    );
  }
}
// #endregion

// #region -------------------------- Redux Connect -----------------------------------
const mapState = (state: App.State): RoutesState => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = (dispatch): RoutesDispatch => {
  return {
    loadInitialData () {
      dispatch(me());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);
// #endregion

// #region ------------------------------ Types ---------------------------------------
type RoutesProps = RoutesState & RoutesDispatch;

type RoutesState = {
  isLoggedIn: boolean;
};

type RoutesDispatch = {
  loadInitialData: () => void;
};
// #endregion
