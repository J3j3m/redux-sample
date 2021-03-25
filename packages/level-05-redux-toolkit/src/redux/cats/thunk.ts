import { instance } from "../../api";
import { Cat } from "../../entities/cats";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCatsThunks = createAsyncThunk("cats/getCats", async () => {
  const { data } = await instance.get<Cat[]>("facts");
  return data;
});
