import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import useUsersAction from "../../hooks/useUsersAction";
type UserType = {
  name?: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  status?: string;
};
const UserInfo: React.FC = () => {
  const { user, logout, users } = useUsersAction();

  return (
    <Card sx={{ padding: "20px" }}>
      <CardContent>
        <Box>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Account information
          </Typography>
        </Box>
        <Typography variant="h5" component="div">
          Name : {user?.name}
        </Typography>
        <Typography color="text.secondary">Email : {user?.email}</Typography>
        <Typography color="text.secondary">
          Role : {user && (user.isAdmin === true ? "Admin" : "User")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          color="error"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserInfo;
