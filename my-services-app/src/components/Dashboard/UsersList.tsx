import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useUsersAction from "../../hooks/useUsersAction";

type UserType = {
  name?: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  status?: string;
};

const UsersList = () => {
  const { users, handleActive, handleInActive } = useUsersAction();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "650px" }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell>
              <Typography variant="h6" color="white">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" color="white">
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" color="white">
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="white">
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user?.name}
              </TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.isAdmin ? "Admin" : "User"}</TableCell>
              <TableCell align="center">
                {!user?.isAdmin &&
                  (user?.status === "inactive" ? (
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => handleActive(user?.email)}
                    >
                      Active
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => handleInActive(user?.email)}
                    >
                      Inactive
                    </Button>
                  ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
