import produce from "immer"

import { AppState, Action } from "./types";

export default produce((draft: AppState, action: Action) => {
  console.info('REDUCER: ', action.type);
  console.log(action.payload);
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
    case 'balance':
      if (draft.auth.user) {
        draft.auth.user.balance = action.payload.balance;
      }
      draft.domains = action.payload.domains;
      break;
    case 'addDomain':
      draft.domains.push(action.payload);
      break;
    case 'deleteDomain':
      const index = draft.domains.findIndex(domain => domain.uuid === action.payload);
      if (index > -1) {
        draft.domains.splice(index);
      }
      break;
  }
});