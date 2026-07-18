import { Stack, Button } from "@mui/material";

function FilterButtons() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <Button variant="contained">
        All
      </Button>

      <Button variant="outlined">
        Pending
      </Button>

      <Button variant="outlined">
        Completed
      </Button>
    </Stack>
  );
}

export default FilterButtons;