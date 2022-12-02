import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import uiSlice from "./features/uiSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    ui: uiSlice,
  },
});
