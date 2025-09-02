// reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // sample data
    // {
    //   id: 123,
    //   task: "Learn Redux - dame task",
    //   isDone: false,
    // },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      //   console.log(newTodo);
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDoneTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, markAsDoneTodo } = todoSlice.actions;
export default todoSlice.reducer;
