import { Dispatch } from "redux";
import { GlobalState } from "../index";
import { getCatsFailed, getCatsSucceeded } from "./action.creator";
import { CatsActions } from "./action.types";
import { instance } from "../../api";
import { Cat } from "../../entities/cats";
import { normalize, schema } from "normalizr";

export const getCatsThunks = () => {
  return async (
    dispatch: Dispatch<CatsActions>,
    getState: () => GlobalState
  ) => {
    try {
      const { data } = await instance.get<Array<Cat>>("facts");

      // Normalize arrays
      const catSchema = new schema.Entity<Cat>(
        "cats",
        {},
        { idAttribute: "_id" }
      );
      const { entities } = normalize(data, new schema.Array(catSchema));

      dispatch(getCatsSucceeded(entities.cats as any));
    } catch (error) {
      dispatch(getCatsFailed(JSON.stringify(error)));
    }
  };
};
