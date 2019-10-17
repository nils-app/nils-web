import { AppState } from "./state";

export type Action = {
  type: string,
  payload?: any,
};

export default (state: AppState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};