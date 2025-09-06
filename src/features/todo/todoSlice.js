import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        task: action.payload,
        isDone: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markAsDoneTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    },
    resetTodos: () => {
      return [];
    },
  },
});

export const { addTodo, deleteTodo, markAsDoneTodo, resetTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
