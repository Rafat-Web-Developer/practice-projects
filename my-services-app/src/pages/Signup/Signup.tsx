import { VisibilityOff } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

const Signup = () => {
  return (
    <Box
      sx={{
        height: "82vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "50%",
          minHeight: "400px",
          padding: "20px",
          border: "4px solid #3f51b5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <Avatar
            sx={{ backgroundColor: "#3f51b5", width: "56px", height: "56px" }}
          >
            <AccountCircleIcon sx={{ fontSize: "40px" }}></AccountCircleIcon>
          </Avatar>
          <Typography variant="h4" sx={{ marginTop: "10px" }}>
            Registration Form
          </Typography>
        </Box>
        <form action="">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              sx={{ width: "60%" }}
              type="text"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "60%" }}
              type="email"
              required
            />
            <FormControl sx={{ width: "60%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{ minWidth: "100px" }}
              type="submit"
              endIcon={<EnhancedEncryptionIcon />}
            >
              Sign up
            </Button>
          </Box>
        </form>
        <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
          <Typography variant="subtitle1" color="initial">
            Already have an account{" >>> "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              Login now
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
