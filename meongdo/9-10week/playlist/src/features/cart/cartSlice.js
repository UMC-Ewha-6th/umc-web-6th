import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  totalAmount: 0,
  status: 'idle',
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/musics');
      if (response.status === 200) {
        if (response.data.length === 0) {
          throw new Error('No data found');
        }
        return response.data;
      } else {
        throw new Error('Failed to fetch cart items');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue('404 Page Not Found');
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalAmount += Number(newItem.price);
      } else {
        existingItem.quantity++;
        state.totalAmount += Number(newItem.price);
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= Number(existingItem.price) * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        state.totalAmount += Number(existingItem.price);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.totalAmount -= Number(existingItem.price);
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          state.totalAmount -= Number(existingItem.price);
        }
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.map(item => ({ ...item, quantity: 1 }));
        state.totalAmount = action.payload.reduce((total, item) => total + Number(item.price), 0);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        alert(`에러가 발생했습니다. 데이터 요청 경로를 확인해주세요! 에러 메시지: ${action.payload}`);
      });
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
