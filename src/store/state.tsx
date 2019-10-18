import React from 'react';

import reducer from './reducer';
import { AppState, AppContext, Action } from './types';

const initialState: AppState = {
  auth: {
    checked: false,
    loggedIn: false,
    user: null,
    csrf: null,
  },
  domains: [],
};
const defaultDispatch: React.Dispatch<Action> = () => {
  console.warn('Using default reducer, check StateProvider');
  return initialState;
}
export const StateContext = React.createContext<AppContext>({
  state: initialState,
  dispatch: defaultDispatch,
});

type Props = {
  children: any,
};

export const StateProvider = (props: Props) =>{
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <StateContext.Provider value={ value }>
      { props.children }
    </StateContext.Provider>
  );
};

export const useStateValue = (): AppContext => React.useContext(StateContext);