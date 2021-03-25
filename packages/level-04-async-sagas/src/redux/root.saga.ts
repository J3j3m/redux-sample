import { loginFlow } from "./auth/auth.saga";
import { all, spawn, call, fork } from "redux-saga/effects";

export function* rootSaga() {
  const sagas = [loginFlow];
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
