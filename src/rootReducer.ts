import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
