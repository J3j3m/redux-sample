import { createSelector } from "reselect";
import { GlobalState } from "..";
import { Cat } from "../../entities/cats";
import {
  GET_CATS,
  GET_CATS_FAILED,
  GET_CATS_SUCCEEDED,
} from "./action.creator";
import { CatsActions } from "./action.types";

export interface State {
  loading: boolean;
  cats: {
    [key: string]: Cat;
  };
  error?: string;
}

export const catLoadingSelector = (state: GlobalState) => state.cats.loading;
export const catsSelectors = (state: GlobalState) => state.cats.cats;
export const catsArraySelector = createSelector(catsSelectors, (cats) =>
  Object.values(cats)
);
export const catsErrorSelector = (state: GlobalState) => state.cats.error;

const initialState = { loading: false, cats: {} };

export const catsReducer = (
  state: State = initialState,
  action: CatsActions
) => {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_CATS_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_CATS_SUCCEEDED:
      return {
        ...state,
        cats: action.payload.cats,
        loading: false,
      };
    default:
      return state;
  }
};
