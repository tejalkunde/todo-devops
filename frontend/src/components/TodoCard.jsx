import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { updateTodo, deleteTodo } from "../services/api";

function TodoCard({ todo, onTodoUpdated }) {
  const handleToggleComplete = async () => {
    try {
      await updateTodo(todo._id, { completed: !todo.completed });
      onTodoUpdated?.();
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTodo(todo._id);
        onTodoUpdated?.();
      } catch (error) {
        console.error("Failed to delete todo:", error);
      }
    }
  };

  return (
    <Card sx={{ mb: 2, opacity: todo.completed ? 0.6 : 1 }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {todo.completed ? "✅ Completed" : "⏳ Pending"}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleToggleComplete}
          >
            {todo.completed ? "Undo" : "Complete"}
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TodoCard;