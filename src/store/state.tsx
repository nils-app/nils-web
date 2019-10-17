import React from 'react';

import reducer, { Action } from './reducer';

export type User = {
  uuid: string,
  email: string,
};

export type AppState = {
  auth: {
    checked: boolean,
    loggedIn: boolean,
    user: User | null,
    csrf: string | null,
  },
};

export type AppContext = {
  state: AppState,
  dispatch: React.Dispatch<Action>,
};

const initialState: AppState = {
  auth: {
    checked: false,
    loggedIn: false,
    user: null,
    csrf: null,
  },
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