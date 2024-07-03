//slice 만들기 _ slice는 reducer와 action 생성함수 등의 기능 제공하는 객체
//name: reducer 이름, initialState: 데이터 초기값 object 형식으로 key/value 형식으로!, reducers: action 형식 지정
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../assets/cartItem';
import { getMusic } from '../apis/PlayList';

export const getMusicList = createAsyncThunk(
  'playerFunction/getMusicList',
  async () => {
    const data = await getMusic();
    return data;
  },
);

//const initialState = cartItems;
const initialState = { items: [], status: 'idle' };

export const cartSlice = createSlice({
  name: 'playerFunction',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.items = state.items.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount + 1 } : e,
      );
    },
    decrease: (state, action) => {
      state.items = state.items.map((e) =>
        e.id === action.payload ? { ...e, amount: e.amount - 1 } : e,
      );
    },
    remove: (state, action) => {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMusicList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMusicList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getMusicList.rejected, (state, action) => {
        alert('Error');
      });
  },
});

export const { increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
