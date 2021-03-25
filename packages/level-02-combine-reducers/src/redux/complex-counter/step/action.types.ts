import { increment, decrement } from "./step.creator";

export type IncrementAction = ReturnType<typeof increment>

export type DecrementAction = ReturnType<typeof decrement>

export type StepActions = IncrementAction | DecrementAction;