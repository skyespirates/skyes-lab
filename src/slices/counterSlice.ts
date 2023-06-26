import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value = state.value - 1;
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    reset: () => initialState,
  },
});

export const { decrement, increment, reset } = counterSlice.actions;

export default counterSlice.reducer;
