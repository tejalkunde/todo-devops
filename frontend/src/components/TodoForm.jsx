import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import { createTodo } from "../services/api";

function TodoForm({ onTodoAdded }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTodo = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      await createTodo(input);
      setInput("");
      onTodoAdded?.();
    } catch (error) {
      console.error("Failed to add todo:", error);
      alert("Failed to add todo. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <TextField
        fullWidth
        label="Enter a Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />

      <Button
        variant="contained"
        onClick={handleAddTodo}
        disabled={loading || !input.trim()}
      >
        {loading ? "Adding..." : "Add"}
      </Button>
    </Stack>
  );
}

export default TodoForm;