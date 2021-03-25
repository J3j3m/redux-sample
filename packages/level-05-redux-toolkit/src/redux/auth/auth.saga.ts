import { fork, call, take, put, cancel } from "typed-redux-saga";
import { authenticate } from "./auth.api";
import Auth from "./slice";

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
    yield put(Auth.loginSucceeded());
    // Store token
    yield call(storeToken as any, token);
  } catch (error) {
    // Update Store with error
    yield put(Auth.loginFailed(error));
  } finally {
    // Some cleaning session code
  }
}

export function* loginFlow(): any {
  while (true) {
    const {
      payload: { user, password },
    }: ReturnType<typeof Auth.loginRequest> = yield take("auth/loginRequest");
    // fork return a Task object which will handle authorize API request
    const task = yield fork(authorize, user, password);
    //throw new Error("Unknown Error");
    console.log("Lock here");
    // If LOGOUT or LOGIN_ERROR action occured, loginFlow is cancelled
    const action = yield take(["auth/logout", "auth/loginFailed"]);

    console.log(action.type);
    if (action.type === "auth/logout") {
      console.log("Cancel Task");
      yield cancel(task);
    }
    // Remove token
    yield call(clearToken, "token");
  }
}
