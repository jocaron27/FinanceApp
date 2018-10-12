// #region ----------------------------- Imports --------------------------------------
import * as React from 'react';
import {connect} from 'react-redux';
import {App} from '../../app';
// #endregion

// #region ---------------------------- Component -------------------------------------
export const Home: React.StatelessComponent<HomeProps> = (props: HomeProps) => {
  const {email} = props;

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  );
}
// #endregion

// #region -------------------------- Redux Connect -----------------------------------
const mapState = (state: App.State): HomeState => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Home);
// #endregion

// #region ------------------------------ Types ---------------------------------------
type HomeProps = HomeState;

type HomeState = {
  email: string;
}
// #endregion
