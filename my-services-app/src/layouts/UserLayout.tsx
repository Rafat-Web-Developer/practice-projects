import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
