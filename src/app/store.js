import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { resetTodos } from "../features/todo/todoSlice";
import { loadTodos, saveTodos } from "../utils/storage";

// ✅ preload state from localStorage
const preloadedState = {
  todos: loadTodos(),
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});

// ✅ save todos to localStorage whenever state changes
store.subscribe(() => {
  const state = store.getState();
  saveTodos(state.todos);
});

// ✅ schedule reset at midnight
function scheduleMidnightReset() {
  const now = new Date();
  const msUntilMidnight =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
    now.getTime();

  setTimeout(() => {
    store.dispatch(resetTodos());
    scheduleMidnightReset(); // keep scheduling daily
  }, msUntilMidnight);
}
scheduleMidnightReset();
