import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  chosenCurrency: "USD",
  selectedCategory: "all",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Reducer to set currency
    setCurrency: (state, { payload }) => {
      return { ...state, chosenCurrency: payload };
    },
    setCategory: (state, { payload }) => {
      return { ...state, selectedCategory: payload };
    },
  },
  extraReducers: {},
});

export const { setCurrency, setCategory } = uiSlice.actions;
export default uiSlice.reducer;
