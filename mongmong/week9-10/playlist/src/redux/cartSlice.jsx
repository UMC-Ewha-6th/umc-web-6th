// redux/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems.jsx'
import { closeModal } from './modalSlice';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:8080/musics');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(`Error: ${error.message}`);
    return rejectWithValue(error.message);
  }
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    complete: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.complete = !item.complete;
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }
      else
      {
        state.items = state.items.filter(e => e.id !== action.payload);
      }
    },
    clear: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
  }
});

export const clearCartAndCloseModal = () => {
  return (dispatch) => {
    dispatch(clear());
    dispatch(closeModal());
  };
};

export const { remove, complete, increment, decrement, clear } = cartSlice.actions;
export default cartSlice.reducer;