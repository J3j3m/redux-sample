import { GlobalState } from "..";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  loading: boolean;
  authenticated: boolean;
  error?: string;
}

export const authenticatedSelector = (state: GlobalState) =>
  state.auth.authenticated;

const initialState: State = { loading: false, authenticated: false };

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    loginRequest: (
      state: State,
      _action: PayloadAction<{ user: string; password: string }>
    ) => {
      state.loading = true;
      state.error = undefined;
    },
    loginFailed: (state: State, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    loginSucceeded: (state: State) => {
      state.authenticated = true;
      state.loading = false;
    },
    logout: (state: State) => {
      state.authenticated = true;
    },
  },
});

const authModule = {
  ...authSlice.actions,
  reducer: authSlice.reducer,
};

export default authModule;
