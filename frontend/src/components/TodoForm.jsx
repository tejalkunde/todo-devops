import { Stack, TextField, Button } from "@mui/material";

function TodoForm() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <TextField
        fullWidth
        label="Enter a Todo"
      />

      <Button
        variant="contained"
      >
        Add
      </Button>
    </Stack>
  );
}

export default TodoForm;