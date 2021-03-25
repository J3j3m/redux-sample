import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { catsReducer } from "./cats/reducer";
import thunk from "redux-thunk";
const appReducer = combineReducers({
  cats: catsReducer,
});

export type GlobalState = ReturnType<typeof appReducer>;
const middlewares = [thunk];
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
