import { TextField } from "@mui/material";

function SearchBar() {
  return (
    <TextField
      fullWidth
      label="Search Todos"
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;