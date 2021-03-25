export const increment = (amount: number) => ({
    type:"INCREMENT_ACTION",
    payload:{
        amount
    }
});

export const decrement = (amount: number) => ({
    type:"DECREMENT_ACTION",
    payload:{
        amount
    }
});