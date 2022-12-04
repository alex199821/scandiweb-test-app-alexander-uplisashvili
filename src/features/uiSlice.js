import { createSlice } from "@reduxjs/toolkit";

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
    // Reducer to select category
    setCategory: (state, { payload }) => {
      return { ...state, selectedCategory: payload };
    },
    //Reducer to open / close overlay container
    handleOverlay: (state) => {
      return { ...state, overlayOpen: !state.overlayOpen };
    },
  },
});

export const { setCurrency, setCategory, handleOverlay } = uiSlice.actions;
export default uiSlice.reducer;
