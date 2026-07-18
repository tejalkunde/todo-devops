import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

function TodoCard() {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          Learn Docker
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Pending
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">
            Complete
          </Button>

          <Button variant="outlined">
            Edit
          </Button>

          <Button
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TodoCard;