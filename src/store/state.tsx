import React from 'react';

import reducer, { Action } from './reducer';

type User = {
  uuid: string,
  email: string,
};

export type AppState = {
  auth: {
    loggedIn: boolean,
    user: User | null,
  },
};

export type AppContext = {
  state: AppState,
  dispatch: React.Dispatch<Action>,
};

const initialState: AppState = {
  auth: {
    loggedIn: false,
    user: null,
  },
};
const defaultDispatch: React.Dispatch<Action> = () => initialState // we never actually use this
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