export const LOGIN_ERROR: "LOGIN_ERROR" = "LOGIN_ERROR";
export const LOGIN_SUCCEEDED: "LOGIN_SUCCEEDED" = "LOGIN_SUCCEEDED";
export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";

export const loginSucceeded = () => ({
  type: LOGIN_SUCCEEDED,
});

export const loginRequest = (user: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {
    user,
    password,
  },
});

export const loginFailed = (error: string) => ({
  type: LOGIN_ERROR,
  payload: {
    error,
  },
});
