import { useSelector } from "react-redux";
import AddTodo from "./addTodo";
import BlockFlippedIcon from "@mui/icons-material/BlockFlipped";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDoneTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  //   console.log(todos);
  let dispatch = useDispatch();

  let deleteTask = (id) => {
    // console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  let markAsDoneTask = (id) => {
    // console.log("mark as done", id);
    dispatch(markAsDoneTodo(id));
  };

  return (
    <div>
      <p>Todo App - With Reducers</p>

      <AddTodo />
      <hr />

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            background: "#354f52",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontWeight: "bold", margin: 0 }}>{todo.task}</p>
          {/* <p style={{ margin: 0 }}>{todo.id}</p> */}

          <div style={{ display: "flex", gap: "300%" }}>
            <p
              style={{
                color: todo.isDone ? "#4fff78ff" : "#258bffff",
                margin: "6px 0 0 0",
                fontSize: "0.95em",
              }}
            >
              {todo.isDone ? (
                <CheckIcon style={{ cursor: "pointer" }} />
              ) : (
                <BlockFlippedIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => markAsDoneTask(todo.id)}
                />
              )}
            </p>
            <p
              style={{
                fontSize: "0.85em",
                color: "#ff8d8dff",
                margin: "4px 0 0 0",
              }}
              onClick={() => deleteTask(todo.id)}
            >
              <DeleteIcon style={{ cursor: "pointer" }} />
            </p>
          </div>
        </div>
      ))}

      {todos.length === 0 && <p>No Todos Added Yet!</p>}
    </div>
  );
}
