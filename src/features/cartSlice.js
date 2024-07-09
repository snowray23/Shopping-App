import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, title, price, quantity });
      }
    },
    updateCartItem(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    removeCartItem(state, action) {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, updateCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;