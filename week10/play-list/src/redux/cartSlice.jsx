import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch cart items from the server
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/musics");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch cart items");
    }
  }
);

const initialState = {
  items: [], // 초기 상태를 빈 배열로 설정
  totalAmount: 0,
  totalQuantity: 0,
  status: "idle", // 요청 상태를 관리하기 위한 필드 추가
  error: null, // 에러 메시지를 저장하기 위한 필드 추가
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.totalAmount = action.payload.reduce(
          (total, item) => total + item.price * item.amount,
          0
        );
        state.totalQuantity = action.payload.reduce(
          (total, item) => total + item.amount,
          0
        );
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        alert(action.payload);
      });
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
