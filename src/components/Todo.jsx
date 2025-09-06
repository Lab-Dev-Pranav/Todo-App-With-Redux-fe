import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import BlockFlippedIcon from "@mui/icons-material/BlockFlipped";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo, markAsDoneTodo } from "../features/todo/todoSlice";

import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const markAsDoneTask = (id) => {
    dispatch(markAsDoneTodo(id));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Todo App
      </Typography>

      <AddTodo />
      <Divider sx={{ marginY: 2 }} />

      {todos.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No Todos Added Yet!
        </Typography>
      ) : (
        todos.map((todo) => (
          <Card
            key={todo.id}
            sx={{
              backgroundColor: todo.isDone ? "#e8f5e9" : "#f5f5f5",
              marginBottom: "12px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: todo.isDone ? "normal" : "bold",
                  textDecoration: todo.isDone ? "line-through" : "none",
                  color: todo.isDone ? "gray" : "black",
                }}
              >
                {todo.task}
              </Typography>

              <div>
                {todo.isDone ? (
                  <CheckIcon sx={{ color: "green", marginRight: 1 }} />
                ) : (
                  <IconButton
                    color="primary"
                    onClick={() => markAsDoneTask(todo.id)}
                  >
                    <BlockFlippedIcon />
                  </IconButton>
                )}
                <IconButton color="error" onClick={() => deleteTask(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
