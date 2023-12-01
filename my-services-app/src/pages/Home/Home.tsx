import { Box } from "@mui/material";
import Banner from "../../components/Home/Banner";
import Services from "../../components/Home/Services";

function Home() {
  return (
    <Box sx={{ minHeight: "82vh" }}>
      <Banner></Banner>
      <Services></Services>
    </Box>
  );
}

export default Home;
