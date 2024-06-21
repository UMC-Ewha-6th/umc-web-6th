import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  items: cartItems,
  totalPrice: 0,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.items.find(item => item.id === id);
      if (selectedItem) {
        selectedItem.amount++;
        state.totalQuantity++;
        state.totalPrice += parseInt(selectedItem.price);
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.items.find(item => item.id === id);
      if (selectedItem && selectedItem.amount > 1) {
        selectedItem.amount--;
        state.totalQuantity--;
        state.totalPrice -= parseInt(selectedItem.price);
      } else if (selectedItem && selectedItem.amount === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= parseInt(selectedItem.price);
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    calculateTotals: state => {
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.amount, 0);
      state.totalPrice = state.items.reduce((acc, item) => acc + (parseInt(item.price) * item.amount), 0);
    }
  }
});

export const { increaseQuantity, decreaseQuantity, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;


