import { useState } from "react";
import Todo from "/components/todo";

import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import DevBy from "./components/devby";

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
        <hr />
        {/* <AddTodo /> */}
      </Provider>
      <DevBy />
    </>
  );
}

export default App;
