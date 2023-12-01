import { Box } from "@mui/material";
import Banner from "../../components/Shared/Banner";
import Services from "../../components/Home/Services";
import bannerImg from "../../assets/images/banner_img.png";

function Home() {
  return (
    <Box>
      <Banner
        bannerImg={bannerImg}
        bannerTitle="Find your best services"
        bannerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id nobis sapiente temporibus, voluptas ratione et quo sunt vel aut dolorum. Recusandae, consequatur. Vero amet earum aliquid tempora nobis culpa."
      ></Banner>
      <Services></Services>
    </Box>
  );
}

export default Home;
