import { Paper, Typography, Box, LinearProgress } from "@mui/material";

function Statistics({ todos = [] }) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;
  const completionPercentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Paper
      elevation={2}
      sx={{
        mt: 4,
        p: 3,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={completionPercentage}
          sx={{ mt: 1, height: 8, borderRadius: 4 }}
        />
        <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
          {completionPercentage}% Complete
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h6" color="primary">
            {total}
          </Typography>
          <Typography variant="caption">Total</Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h6" color="success.main">
            {completed}
          </Typography>
          <Typography variant="caption">Completed</Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h6" color="warning.main">
            {pending}
          </Typography>
          <Typography variant="caption">Pending</Typography>
        </Paper>
      </Box>
    </Paper>
  );
}

export default Statistics;