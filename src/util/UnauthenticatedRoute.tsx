import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from 'store/state';

type Props = {
  path: string,
  exact?: boolean,
  component?: React.ComponentType<any>,
};

/**
 * This Route only allows browsing into if the user is NOT logged in
 */
export default (props: Props) => {
  const { state } = useStateValue();
  if (state.auth.loggedIn) {
    return (
      <Redirect to='/dashboard' />
    );
  }

  return (
    <Route
      path={ props.path }
      exact={ props.exact }
      component={ props.component }
    />
  );
};