import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems"; // cartItems import

const initialState = {
  items: cartItems, // 초기 상태로 cartItems 설정
  totalAmount: cartItems.reduce(
    (total, item) => total + item.price * item.amount,
    0
  ),
  totalQuantity: cartItems.reduce((total, item) => total + item.amount, 0),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount++;
        state.totalAmount += item.price;
        state.totalQuantity++;
      }
    },
    decreaseItemCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount--;
        state.totalAmount -= item.price;
        state.totalQuantity--;
        if (item.amount < 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalAmount -= item.price * item.amount;
        state.totalQuantity -= item.amount;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    calculateTotals: (state) => {
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.amount++;
      } else {
        state.items.push({ ...newItem, amount: 1 });
      }
      state.totalAmount += newItem.price;
      state.totalQuantity++;
    },
  },
});

export const {
  increaseItemCount,
  decreaseItemCount,
  removeItem,
  clearCart,
  calculateTotals,
  addItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
