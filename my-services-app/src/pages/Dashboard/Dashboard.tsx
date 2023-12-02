import { Box } from "@mui/material";
import UsersList from "../../components/Dashboard/UsersList";
import UserInfo from "../../components/Dashboard/UserInfo";
import useUsersAction from "../../hooks/useUsersAction";

const Dashboard = () => {
  const { user } = useUsersAction();
  return (
    <Box sx={{ margin: "30px 0px" }}>
      <Box sx={{ margin: "20px 0px" }}>
        <UserInfo />
      </Box>
      {user?.isAdmin && <UsersList />}
    </Box>
  );
};

export default Dashboard;
