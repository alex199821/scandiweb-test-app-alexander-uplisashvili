import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { singleProduct3 } from "../Utils/data";
import { singleProduct } from "../Utils/data";
const initialState = {
  productsList: singleProduct.data.category.products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {
  setFilterOptions,
  filterProducts,
  setSearchValue,
  filterBySearch,
} = productsSlice.actions;
export default productsSlice.reducer;
