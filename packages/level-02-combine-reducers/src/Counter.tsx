import React, { ReactElement } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "./redux";
import * as CounterActionsCreator from "./redux/complex-counter/counter/action.creator";

export const Counter: React.FC<{
  children: (props: {
    increment: (step: number) => void;
    decrement: (step: number) => void;
    value: number;
  }) => ReactElement<any, any> | null;
}> = ({ children }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state: GlobalState) => state.complexCounter.counter.current
  );
  const increment = (step: number) => {
    dispatch(CounterActionsCreator.increment(step));
  };
  const decrement = (step: number) =>
    dispatch(CounterActionsCreator.decrement(step));
  return children({ increment, decrement, value });
};
