import { increment, decrement } from "./action.creator";

export type IncrementAction = ReturnType<typeof increment>

export type DecrementAction = ReturnType<typeof decrement>

export type CounterActions = IncrementAction | DecrementAction;