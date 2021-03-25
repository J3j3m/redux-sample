import React, { ReactElement } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "./redux";
import * as StepActionsCreator from "./redux/complex-counter/step/step.creator";

interface StepProps {
  children: (props: {
    incrementStep: () => void;
    decrementStep: () => void;
    step: number;
  }) => ReactElement<any, any> | null;
}

export const Step: React.FC<StepProps> = ({ children }) => {
  const dispatch = useDispatch();
  const step = useSelector(
    (state: GlobalState) => state.complexCounter.step.current
  );
  const incrementStep = () => {
    dispatch(StepActionsCreator.increment(1));
  };
  const decrementStep = () => dispatch(StepActionsCreator.decrement(1));
  return children({ incrementStep, decrementStep, step });
};
