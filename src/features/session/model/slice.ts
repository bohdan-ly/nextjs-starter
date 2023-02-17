import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "app/model/api";
import { Category, FilterSliceState, Status } from "./types";

const initialState: FilterSliceState = {
  query: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery } = filterSlice.actions;

export default filterSlice.reducer;
