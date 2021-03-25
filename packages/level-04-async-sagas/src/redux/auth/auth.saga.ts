import { fork, call, take, put, cancel } from "typed-redux-saga";
import { LoginRequestAction } from "./action.types";
import { authenticate } from "./auth.api";
import { loginFailed, loginSucceeded, LOGIN_REQUEST } from "./action.creator";

const storeItem = async (token: string) => {
  // Do never, ever do this
  localStorage.setItem("token", token);
};

const clearItem = async (key: string) => {
  localStorage.removeItem(key);
};

function* clearToken(key: string) {
  yield call(clearItem, key);
}

function* storeToken(token: string): Iterator<any> {
  yield call(storeItem, token);
}

function* authorize(user: string, password: string): Iterator<any> {
  try {
    // Call API
    const token = yield call(authenticate, user, password);
    // Update Store with success
    yield put(loginSucceeded());
    // Store token
    yield call(storeToken as any, token);
  } catch (error) {
    // Update Store with error
    yield put(loginFailed(error));
  } finally {
    // Some cleaning session code
  }
}

export function* loginFlow(): any {
  while (true) {
    const {
      payload: { user, password },
    }: LoginRequestAction = yield take(LOGIN_REQUEST);
    // fork return a Task object which will handle authorize API request
    const task = yield fork(authorize, user, password);
    // If LOGOUT or LOGIN_ERROR action occured, loginFlow is cancelled
    const action = yield take(["LOGOUT", "LOGIN_ERROR"]);
    if (action.type === "LOGOUT") yield cancel(task);
    // Remove token
    yield call(clearToken, "token");
  }
}
