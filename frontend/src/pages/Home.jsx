import { Container, Paper } from "@mui/material";

import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import TodoList from "../components/TodoList";
import Statistics from "../components/Statistics";

function Home() {
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
        <TodoForm />
        <SearchBar />
        <FilterButtons />
        <TodoList />
        <Statistics />
      </Paper>
    </Container>
  );
}

export default Home;