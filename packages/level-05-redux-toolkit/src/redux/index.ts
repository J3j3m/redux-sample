import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import Cats from "./cats/slice";
import thunk from "redux-thunk";
import Auth from "./auth/slice";
import { rootSaga } from "./root.saga";

const saga = createSagaMiddleware();

const appReducer = combineReducers({
  cats: Cats.reducer,
  auth: Auth.reducer,
});

export type GlobalState = ReturnType<typeof appReducer>;
const middlewares = [thunk, saga];
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

saga.run(rootSaga);
