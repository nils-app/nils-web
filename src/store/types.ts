export type User = {
  uuid: string,
  email?: string,
  balance: number,
  created_on: Date,
};

export type Domain = {
  uuid: string,
  domain: string,
  balance: number,
  created_on: Date,
};

export type AppState = {
  auth: {
    checked: boolean,
    loggedIn: boolean,
    user: User | null,
    csrf: string | null,
  },
  domains: Domain[],
};

export type Action = {
  type: string,
  payload?: any,
};

export type AppContext = {
  state: AppState,
  dispatch: React.Dispatch<Action>,
};