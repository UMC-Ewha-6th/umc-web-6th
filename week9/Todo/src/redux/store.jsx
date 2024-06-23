import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

//configureStore로 store 생성함
//객체 형태의 인자에는 reducer이 꼭 있어야 한다.
export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
