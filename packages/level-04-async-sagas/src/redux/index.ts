import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { catsReducer } from "./cats/reducer";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { rootSaga } from "./root.saga";

const saga = createSagaMiddleware();

const appReducer = combineReducers({
  cats: catsReducer,
  auth: authReducer,
});

export type GlobalState = ReturnType<typeof appReducer>;
const middlewares = [thunk, saga];
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

saga.run(rootSaga);
