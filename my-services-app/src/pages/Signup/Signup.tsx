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
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import React, { useState } from "react";

type UserType = {
  name: string;
  email: string;
  password: string;
};
let users: UserType[] = [];

const Signup: React.FC = () => {
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUser: UserType = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    if (newUser?.password.length < 4) {
      alert("Password have at least 4 character");
    }

    const getCurrentUsers: null | string = localStorage.getItem("users");

    if (getCurrentUsers !== null) {
      users = JSON.parse(getCurrentUsers);
      if (users.length > 0) {
        const findUser: UserType | undefined = users.find(
          (user) => user?.email === newUser?.email
        );
        if (findUser) {
          setSuccessMessage("");
          setErrorMessage(
            "This email already have an account || Please try again"
          );
          setOpenNotification(true);
          return;
        }
      }
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setErrorMessage("");
    setSuccessMessage("User created successfully || You can login now");
    setOpenNotification(true);
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
  };
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
              label="Name"
              name="name"
              variant="outlined"
              sx={{ width: "60%" }}
              type="text"
              required
            />
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
