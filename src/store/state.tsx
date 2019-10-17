import React from 'react';

import reducer from './reducer';

export type AppState = {};

const initialState: AppState = {};
export const StateContext = React.createContext<AppState>(initialState);

type Props = {
  children: any,
};

export const StateProvider = (props: Props) =>(
  <StateContext.Provider value={ React.useReducer(reducer, initialState) }>
    { props.children }
  </StateContext.Provider>
);

export const useStateValue = () => React.useContext(StateContext);