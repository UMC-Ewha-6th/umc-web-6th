import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/musics');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('에러가 발생했습니다. 데이터 요청 경로를 확인해주세요!');
    }
  }
);

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  clearMessage: false,
  status: 'idle',
  error: null,
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
        state.items = state.items.filter(item => item.id !== id); // 항목을 배열에서 제거
        state.totalQuantity--;
        state.totalPrice -= parseInt(selectedItem.price);
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.clearMessage = true;
    },
    calculateTotals: state => {
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.amount, 0);
      state.totalPrice = state.items.reduce((acc, item) => acc + (parseInt(item.price) * item.amount), 0);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        alert(action.payload);
      });
  },
});

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.totalPrice;
export const selectCartMessage = state => state.cart.clearMessage;
export const selectCartError = state => state.cart.error;
export const selectCartStatus = state => state.cart.status;

export const { increaseQuantity, decreaseQuantity, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;










