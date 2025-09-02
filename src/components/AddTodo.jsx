import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  let [todo, setTodo] = useState("");
  let dispatch = useDispatch();

  let onChange = (e) => {
    setTodo(e.target.value);
  };

  let onSubmit = (e) => {
    e.preventDefault();
    // console.log(todo);
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <br />
        <TextField
          type="text"
          id="filled-basic"
          label="Enter Todo"
          variant="outlined"
          value={todo}
          onChange={onChange}
        />
        <br />
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
