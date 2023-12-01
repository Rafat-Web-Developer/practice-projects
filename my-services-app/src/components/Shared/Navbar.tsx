import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState<null | number>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setValue(0);
        break;
      case "/about":
        setValue(1);
        break;

      default:
        break;
    }
  }, [location.pathname]);

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          component="div"
          variant="h5"
          color="white"
          sx={{ flexGrow: "1" }}
        >
          Services
        </Typography>
        <Tabs
          value={value}
          onChange={(e, value) => setValue(value)}
          indicatorColor="primary"
        >
          <Tab
            label="Home"
            sx={{ color: value == 0 ? "primary" : "white" }}
            onClick={() => handleRoute("/")}
          ></Tab>
          <Tab
            label="About"
            sx={{ color: value == 1 ? "primary" : "white" }}
            onClick={() => handleRoute("/about")}
          ></Tab>
          <Tab
            label="FAQ"
            sx={{ color: value == 2 ? "primary" : "white" }}
            onClick={() => handleRoute("/faq")}
          ></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
