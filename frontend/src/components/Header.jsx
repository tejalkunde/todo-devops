import { Typography } from "@mui/material";

function Header() {
  return (
    <Typography
      variant="h4"
      align="center"
      sx={{
        mb: 4,
        fontWeight: "bold",
      }}
    >
      📝 Todo Dashboard
    </Typography>
  );
}

export default Header;