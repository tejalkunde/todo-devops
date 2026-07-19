import { Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import TodoList from "../components/TodoList";
import Statistics from "../components/Statistics";
import { getTodos } from "../services/api";

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
      setError("Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoAdded = () => {
    fetchTodos();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          minHeight: "80vh",
        }}
      >
        <Header />
        <TodoForm onTodoAdded={handleTodoAdded} />
        <SearchBar />
        <FilterButtons />
        <TodoList todos={todos} loading={loading} error={error} onTodoUpdated={handleTodoAdded} />
        <Statistics todos={todos} />
      </Paper>
    </Container>
  );
}

export default Home;