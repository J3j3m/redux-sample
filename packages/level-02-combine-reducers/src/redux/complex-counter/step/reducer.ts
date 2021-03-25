import { StepActions } from "./action.types";

export interface State {
    current: number
}

const initialState= {current: 0};

export const stepReducer = (state: State = initialState, action: StepActions) => {
    switch(action.type){
        case "INCREMENT_STEP":
            state.current -= (action.payload.amount)
            break;
        case "DECREMENT_STEP":
            state.current += (action.payload.amount)
            break;
    }
    return state;
}