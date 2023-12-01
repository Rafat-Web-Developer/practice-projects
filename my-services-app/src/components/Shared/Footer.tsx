import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Footer = () => {
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
};

export default Footer;
