import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  // subtotal: 0,
  itemsInCart: 0,
  // finalOrder: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add new product to cart
    addToCart: (state, { payload }) => {
      //This is statement for case that if given product with given attributes already exists products should stack up in the cart
      if (state.cart.find((item) => item.variantId === payload.variantId)) {
        let id = state.cart.find(
          (item) => item.variantId === payload.variantId
        ).id;

        let newCart = state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cart: newCart,
          itemsInCart: state.itemsInCart + 1,
        };
      } else {
        //In case the product and its specifications are unique new product is added to cart
        let updatedCart = state.cart.concat(payload);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
          itemsInCart: state.itemsInCart + 1,
        };
      }
    },
    // Reducer to remove product from cart
    removeFromCart: (state, { payload }) => {
      let newCart = state.cart.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    },
    // Reducer to handle amount of items inside cart
    handleItemAmount: (state, { payload }) => {
      const { value, id } = payload;
      let newCart = state.cart.map((item) =>
        item.id === id ? { ...item, amount: value } : item
      );
      return {
        ...state,
        cart: newCart,
      };
    },
    // Reducer to calculate and return final amount to pay
    setCart: (state) => {
      const subtotal = () => {
        let totalSum = 0;
        state.cart.map((item) => {
          const { price, amount } = item;
          totalSum = totalSum + price * amount;
        });
        return totalSum;
      };
      return { ...state, subtotal: subtotal() };
    },
    // Reducer to calculate amount of all items in cart
    setItemsInCart: (state) => {
      const itemsAmount = () => {
        let totalItems = 0;
        state.cart.map((item) => {
          const { amount } = item;
          totalItems = totalItems + amount;
        });
        return totalItems;
      };
      return { ...state, itemsInCart: itemsAmount() };
    },
    // Reducer to create final order with all necessary information
    setFinalOrder: (state, { payload }) => {
      const newFinalOrder = {
        orderInformation: payload,
        cart: state.cart,
        total: state.subtotal,
      };
      return { ...state, finalOrder: newFinalOrder };
    },
    // Reducer to clear all items and reset cart
    resetState: (state) => {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
        subtotal: 0,
        itemsInCart: 0,
        finalOrder: [],
      };
    },
  },
  extraReducers: {},
});

export const {
  addToCart,
  removeFromCart,
  handleItemAmount,
  setCart,
  setItemsInCart,
  setFinalOrder,
  resetState,
} = cartSlice.actions;
export default cartSlice.reducer;