import { CounterActions } from "./action.types";

export interface State {
    current: number
}

const initialState= {current: 0};

export const counterReducer = (state: State = initialState, action: CounterActions) => {
    switch(action.type){
        case "DECREMENT_ACTION":
            state.current -= (action.payload.amount)
            break;
        case "INCREMENT_ACTION":
            state.current += (action.payload.amount)
            break;
    }
    return state;
}