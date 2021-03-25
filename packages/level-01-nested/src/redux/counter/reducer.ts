import { CounterActions } from "./action.types";

export interface State {
  nested: {
    current: number;
  };
}

const initialState = { nested: { current: 0 } };

// Bad Way to DO
// export const counterReducer = (state: State = initialState, action: CounterActions) => {
//     switch(action.type){
//         case "DECREMENT_ACTION":
//             state.nested.current -= (action.payload.amount)
//             break;
//         case "INCREMENT_ACTION":
//             state.nested.current += (action.payload.amount)
//             break;
//     }
//     return state;
// }

// The Good Way !!
export const counterReducer = (
  state: State = initialState,
  action: CounterActions
): State => {
  switch (action.type) {
    case "DECREMENT_ACTION":
      return {
        nested: {
          current: state.nested.current - action.payload.amount,
        },
      };
    case "INCREMENT_ACTION":
      return {
        nested: {
          current: state.nested.current + action.payload.amount,
        },
      };
    default:
      return state;
  }
};
