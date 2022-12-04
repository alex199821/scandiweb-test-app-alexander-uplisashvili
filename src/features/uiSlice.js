import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedCurrency: JSON.parse(localStorage.getItem("currency")) || {
    label: "USD",
    symbol: "$",
  },
  selectedCategory: "all",
  overlayOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Reducer to set currency
    setCurrency: (state, { payload }) => {
      localStorage.setItem("currency", JSON.stringify(payload));
      return { ...state, selectedCurrency: payload };
    },
    setCategory: (state, { payload }) => {
      return { ...state, selectedCategory: payload };
    },
    handleOverlay: (state) => {
      return { ...state, overlayOpen: !state.overlayOpen };
    },
  },
});

export const { setCurrency, setCategory, handleOverlay } = uiSlice.actions;
export default uiSlice.reducer;
