import produce from "immer"

import { AppState } from "./state";

export type Action = {
  type: string,
  payload?: any,
};

export default produce((draft: AppState, action: Action) => {
  console.info('REDUCER', action);
  switch (action.type) {
    case 'login':
      draft.auth.checked = true;

      if (!action.payload) {
        break;
      }

      draft.auth.loggedIn = true;
      draft.auth.user = action.payload.user;
      draft.auth.csrf = action.payload.csrf;
      break;
  }
});