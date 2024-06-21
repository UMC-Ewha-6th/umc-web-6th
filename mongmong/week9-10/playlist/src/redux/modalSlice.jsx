// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems.jsx'

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

const initialState = {
    isOpen: false,
  };
  
  const modalSlice = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL:
        return {
          ...state,
          isOpen: true,
        };
      case CLOSE_MODAL:
        return {
          ...state,
          isOpen: false,
        };
      default:
        return state;
    }
  };

export default modalSlice;