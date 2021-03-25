import { CounterActions } from "./action.types";

export interface State {
    current: number
}

const initialState= {current: 0};

export const counterReducer = (state: State = initialState, action: CounterActions) => {
    switch(action.type){
        case "DECREMENT_ACTION":
            return {
                current: state.current - (action.payload.amount)
            };
        case "INCREMENT_ACTION":
            return {
                current: state.current + (action.payload.amount)
            };
        default:
            return state;
    }
}