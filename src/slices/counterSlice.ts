import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../rootReducer";

export type CounterState = {
  title: string;
  value: number;
};

const initialState: CounterState = {
  title: "Counter",
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
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.value = state.value + payload;
    },
    reset: () => initialState,
  },
});

export const { decrement, increment, incrementByAmount, reset } =
  counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
