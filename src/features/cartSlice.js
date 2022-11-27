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
      let updatedCart = state.cart.concat(payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
        itemsInCart: state.itemsInCart + 1,
      };
    },
    // Reducer to remove product from cart
    removeFromCart: (state, { payload }) => {
      let newCart = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: newCart };
    },
    // Reducer to handle amount of items inside cart
    handleItemAmount: (state, { payload }) => {
      const { value, id } = payload;
      state.cart.find((item) => item.id == id).amount = value;
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
    editAttributes: (state, { payload }) => {
      const { id, name, option } = payload;
      state.cart.find((item) => item.id === payload.id)[payload.name] =
        payload.option;

      // console.log(JSON.stringify(state.cart, undefined, 2));
      // console.log(payload);
      // console.log(state.cart.filter((item) => item.id === payload.id));
      // let newState = state.cart.filter((item) => item.id === payload.id)[0];
      // let astate = state.cart.filter((item) => item.id !== payload.id)[0];
      // newState[payload.name] = payload.option;

      // console.log(JSON.stringify(updatedState, undefined, 2));
      // console.log(JSON.stringify(newState, undefined, 2));
      // let ar = [];
      // ar.push(newState);
      // ar.push(astate);
      // console.log(ar);

      // const { id, name, option } = payload;
      // let updateCartMap = () => {
      //   let newCart = [];
      //   state.cart.map((item) => {
      //     // console.log(item);
      //     console.log(JSON.stringify(item, undefined, 2));
      //     console.log(JSON.stringify(state.cart, undefined, 2));
      //     if (item.id === id) {
      //       // item[name] = option;
      //       // newCart.push(item);
      //     } else {
      //       // newCart.push(item);
      //     }
      //   });
      //   return newCart;
      // };
      // // console.log(JSON.stringify(updateCartMap()));
      // // console.log(JSON.stringify(ar, undefined, 2));
      // // let itemNew = updateCartMap();
      // updateCartMap();
      // return {
      //   ...state,
      //   cart: [],
      // };
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
  editAttributes,
} = cartSlice.actions;
export default cartSlice.reducer;
