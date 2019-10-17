import React from 'react';

import reducer from './reducer';

export type AppState = {
  user: string,
};

export type AppContext = {
  state: AppState,
  dispatch: React.Dispatch<React.SetStateAction<any>>,
};

const initialState: AppState = {
  user: 'alex',
};
const defaultDispatch: React.Dispatch<React.SetStateAction<any>> = () => initialState // we never actually use this
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