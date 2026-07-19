import { Box, Typography, CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";

function TodoList({ todos = [], loading = false, error = null, onTodoUpdated = () => {} }) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ my: 2, textAlign: "center" }}>
        {error}
      </Typography>
    );
  }

  if (todos.length === 0) {
    return (
      <Typography sx={{ my: 4, textAlign: "center", color: "text.secondary" }}>
        No todos yet. Add one to get started! 🎯
      </Typography>
    );
  }

  return (
    <Box>
      {todos.map((todo) => (
        <TodoCard key={todo._id} todo={todo} onTodoUpdated={onTodoUpdated} />
      ))}
    </Box>
  );
}

export default TodoList;