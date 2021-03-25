export const increment = (amount: number) => ({
    type:"INCREMENT_STEP",
    payload:{
        amount
    }
});

export const decrement = (amount: number) => ({
    type:"DECREMENT_STEP",
    payload:{
        amount
    }
});