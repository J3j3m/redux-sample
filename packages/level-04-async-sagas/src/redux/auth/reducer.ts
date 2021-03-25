import { createSelector } from "reselect";
import { GlobalState } from "..";
import { LOGIN_ERROR, LOGIN_SUCCEEDED, LOGIN_REQUEST } from "./action.creator";

export interface State {
  loading: boolean;
  authenticated: boolean;
  error?: string;
}

export const authenticatedSelector = (state: GlobalState) =>
  state.auth.authenticated;

const initialState = { loading: false, authenticated: false };

export const authReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
