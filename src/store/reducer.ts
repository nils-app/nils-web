import { AppState } from "./state";

export type Action = {
  type: string,
  payload?: any,
};

export default (state: AppState, action: Action): AppState => {
  console.info('REDUCER', action);
  switch (action.type) {
    case 'login':
      state.auth.loggedIn = true;
      state.auth.user = action.payload;
      break;
    default:
      return state;
  }
  return state;
};