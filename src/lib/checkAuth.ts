import { useEffect } from 'react';

import { useStateValue } from '../store/state';
import { fetchResource } from '../util/fetch';

function useCheckLogin() {
  const { state, dispatch } = useStateValue();
  const checkedLogin = state.auth.checked;

  useEffect(() => {
    if (!checkedLogin) {
      fetchResource('/users/current', 'GET').then(data => {
        if (!data || !data.user.uuid) {
          console.warn('Invalid user object');
          return;
        }

        dispatch({
          type: 'login',
          payload: data,
        })
      });
    }
  }, [checkedLogin, dispatch]);
}


export default useCheckLogin;