import { Cat } from "../../entities/cats";

export const GET_CATS : "GET_CATS" = "GET_CATS";
export const GET_CATS_SUCCEEDED : "GET_CATS_SUCCEEDED" = "GET_CATS_SUCCEEDED";
export const GET_CATS_FAILED : "GET_CATS_FAILED" = "GET_CATS_FAILED";

export const getCats = () => ({
    type: GET_CATS,
});

export const getCatsSucceeded = (cats: {[key:string]: Cat}) => ({
    type: GET_CATS_SUCCEEDED,
    payload: {
        cats
    }
});

export const getCatsFailed = (error: string) => ({
    type: GET_CATS_FAILED,
    payload:{
        error
    }
});