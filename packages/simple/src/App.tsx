import React, { Children, ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux";
import { State } from "./redux/counter/reducer";
import * as ActionsCreator from "./redux/counter/action.creator";

const Counter: React.FC<{
  children: (props: {
    increment: () => void;
    decrement: () => void;
    value: number;
  }) => ReactElement<any, any> | null;
}> = ({ children }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: { counter: State }) => state.counter.current
  );
  const increment = () => {
    dispatch(ActionsCreator.increment(1));
  };
  const decrement = () => dispatch(ActionsCreator.decrement(1));
  return children({ increment, decrement, value });
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter>
          {({ value, increment, decrement }) => (
            <div>
              <h3>{value}</h3>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </div>
          )}
        </Counter>
      </div>
    </Provider>
  );
}

export default App;
