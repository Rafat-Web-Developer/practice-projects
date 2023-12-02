import React from "react";
import useUsersAction from "../hooks/useUsersAction";
import { useNavigate } from "react-router-dom";

type PropsType = {
  children: JSX.Element;
};
const PrivateRoute: React.FC<PropsType> = ({ children }) => {
  const { user, loading } = useUsersAction();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading</div>;
  }

  if (!user || user?.status === "inactive") {
    navigate("/login");
    return;
  }

  return children;
};

export default PrivateRoute;
