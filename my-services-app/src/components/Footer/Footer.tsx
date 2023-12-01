import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        padding: "20px 0px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="White" gutterBottom>
          My Service
        </Typography>
        <Typography variant="body2" color="white">
          Find your best services with low cost
        </Typography>
      </Box>
    </Box>
  );
}
