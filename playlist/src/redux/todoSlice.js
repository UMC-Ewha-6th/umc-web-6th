//slice 만들기 _ slice는 reducer와 action 생성함수 등의 기능 제공하는 객체
//name: reducer 이름, initialState: 데이터 초기값 object 형식으로 key/value 형식으로!, reducers: action 형식 지정
//add: 할 일이 입력창에 입력되면 텍스트를 값에 추가
//remove: 선택된 할 일을 제외한 모든 할 일들을 새로운 객체로 리턴
//complete: 선택된 할 일을 true로
import { createSlice } from '@reduxjs/toolkit';

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
  name: 'todoFunction',
  initialState,
  reducers: {
    add: (state, action) => {
      nextId++;
      state.push({
        id: nextId,
        text: action.payload,
        complete: false,
      });
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, complete: !e.complete } : e,
      ); //..e는 Spread Operator(e 객체의 모든 속성을 새로운 객체에 복사), complete : !e.complete는 삼항 연산자를 이용해서 속성 값을 반대로 설정
    },
  },
});

export const { add, remove, complete } = todoSlice.actions;
export default todoSlice.reducer;
