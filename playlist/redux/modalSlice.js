import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

export const modalSlice = createSlice({
  name: 'modalFunction',
  initialState,
  reducers: {
    open: (state) => {
      document.body.style.overflow = 'hidden';
      state.isOpen = true;
    },
    close: (state) => {
      document.body.style.overflow = 'unset';
      state.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
