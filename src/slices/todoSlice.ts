import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "../rootReducer";

type Todo = {
  id: string;
  todo: string;
  completed: boolean;
};

type StateType = {
  todos: Todo[];
};

const initialState: StateType = {
  todos: [
    {
      id: "wkwk",
      todo: "running on track",
      completed: true,
    },
    {
      id: "awokawok",
      todo: "swimming at pool",
      completed: false,
    },
    {
      id: "qqq",
      todo: "playing basketball on court",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      const newTodo = {
        id: nanoid(4),
        todo: payload,
        completed: false,
      };
      state.todos = [newTodo, ...state.todos];
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleCompleted: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
