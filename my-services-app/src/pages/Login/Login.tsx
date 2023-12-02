import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Alert,
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import useUserLogin from "../../hooks/useUserLogin";

const Signup: React.FC = () => {
  const {
    openNotification,
    errorMessage,
    successMessage,
    showPassword,
    setOpenNotification,
    handleShowPassword,
    handleSubmit,
  } = useUserLogin();
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
            Login Form
          </Typography>
        </Box>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <TextField
              label="Email"
              name="email"
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
                type={showPassword ? "text" : "password"}
                name="password"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
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
              endIcon={<LockOpenIcon />}
            >
              Login
            </Button>
          </Box>
        </form>
        <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
          <Typography variant="subtitle1" color="initial">
            Create your new account{" >>> "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              Signup now
            </Link>
          </Typography>
        </Box>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openNotification}
        autoHideDuration={6000}
        onClose={() => setOpenNotification(false)}
      >
        <Alert
          onClose={() => setOpenNotification(false)}
          severity={errorMessage ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {errorMessage && errorMessage}
          {successMessage && successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Signup;
