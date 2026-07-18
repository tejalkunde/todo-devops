import { Paper, Typography } from "@mui/material";

function Statistics() {
  return (
    <Paper
      elevation={2}
      sx={{
        mt: 4,
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography>
        Total: 3 | Completed: 1 | Pending: 2
      </Typography>
    </Paper>
  );
}

export default Statistics;