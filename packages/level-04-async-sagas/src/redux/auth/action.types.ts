import { loginRequest, loginSucceeded, loginFailed } from "./action.creator";

export type LoginRequestAction = ReturnType<typeof loginRequest>;

export type LoginSuccededAction = ReturnType<typeof loginSucceeded>;

export type LoginErrorAction = ReturnType<typeof loginFailed>;

export type LoginActions =
  | LoginRequestAction
  | LoginSuccededAction
  | LoginErrorAction;
