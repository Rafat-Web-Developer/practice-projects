import { Box } from "@mui/material";
import Banner from "../../components/Shared/Banner";
import bannerImg from "../../assets/images/banner_img.png";

function About() {
  return (
    <Box>
      <Banner
        bannerImg={bannerImg}
        bannerTitle="About Me"
        bannerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iusto tempora optio ipsum accusamus quidem voluptatem assumenda?"
      />
    </Box>
  );
}

export default About;
