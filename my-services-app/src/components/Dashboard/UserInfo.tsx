import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const UserInfo = () => {
  return (
    <Card sx={{ padding: "20px" }}>
      <CardContent>
        <Box>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Account information
          </Typography>
        </Box>
        <Typography variant="h5" component="div">
          Name : Rafat Hossain
        </Typography>
        <Typography color="text.secondary">Email : test@gmail.com</Typography>
        <Typography color="text.secondary">Role : Admin</Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="error">
          Logout
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserInfo;
