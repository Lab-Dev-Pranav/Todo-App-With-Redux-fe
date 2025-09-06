import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return; // prevent empty todos
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <TextField
        type="text"
        label="Enter a task..."
        variant="outlined"
        value={todo}
        onChange={onChange}
        size="small"
        sx={{ width: "300px" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ padding: "8px 20px", borderRadius: "8px" }}
      >
        Add
      </Button>
    </form>
  );
}
