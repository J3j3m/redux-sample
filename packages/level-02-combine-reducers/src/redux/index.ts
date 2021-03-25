import { combineReducers, createStore } from "redux";
import { counterReducer } from "./complex-counter/counter/reducer";
import { stepReducer } from "./complex-counter/step/reducer";

const appReducer = combineReducers({
  complexCounter: combineReducers({
    counter: counterReducer,
    step: stepReducer,
  }),
});

export type GlobalState = ReturnType<typeof appReducer>;

export const store = createStore(
  appReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
