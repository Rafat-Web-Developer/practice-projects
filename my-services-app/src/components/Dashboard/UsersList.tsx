import {
  Box,
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
const UsersList = () => {
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
            <TableCell align="center">
              <Typography variant="h6" color="white">
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Rafat
            </TableCell>
            <TableCell>email</TableCell>
            <TableCell align="center">
              <Button size="small" variant="contained" color="success">
                Active
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
