import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Container } from "@mui/material";

function UserLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer />
    </>
  );
}

export default UserLayout;
