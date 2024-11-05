

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex(product => product.id === productId);
      if (productIndex !== -1) {
        state.totalPrice -= state.cart[productIndex].price;
        state.cart.splice(productIndex, 1);
      }
    },
    setCart(state, action) {
      state.cart = action.payload.cart;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
