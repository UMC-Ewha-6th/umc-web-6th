import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import cartSlice from './cartSlice';
import modalSlice from './modalSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
    player: cartSlice,
    modal: modalSlice,
  },
});
