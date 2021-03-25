import { GlobalState } from "..";
import { Cat } from "../../entities/cats";
import memoize from "lodash.memoize";
import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from "@reduxjs/toolkit";
import { getCatsThunks } from "./thunk";

const entityAdapter = createEntityAdapter<Cat>({
  selectId: (model) => model._id,
});

export interface State extends EntityState<Cat> {
  loading: boolean;
  error?: string;
}

export const {
  selectAll: catsSelector,
  selectById: catsSelectorById,
} = entityAdapter.getSelectors((state: GlobalState) => state.cats);

export const catLoadingSelector = (state: GlobalState) => state.cats.loading;
export const catsErrorSelector = (state: GlobalState) => state.cats.error;

export const initialState: State = {
  loading: false,
  error: undefined,
  ...entityAdapter.getInitialState(),
};

const catsSlice = createSlice({
  initialState: initialState,
  name: "cats",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCatsThunks.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getCatsThunks.fulfilled, (state, action) => {
        entityAdapter.addMany(state, action);
        state.loading = false;
      })
      .addCase(getCatsThunks.rejected, (state, action) => {
        state.error = JSON.stringify(action.payload);
        state.loading = false;
      });
  },
});

const catsModule = {
  ...catsSlice.actions,
  reducer: catsSlice.reducer,
};

export default catsModule;
