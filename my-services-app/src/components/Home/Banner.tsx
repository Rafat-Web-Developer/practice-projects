import { Box, Button, Grid, Typography } from "@mui/material";
import bannerImg from "../../assets/images/banner_img.png";

const Banner = () => {
  return (
    <Box sx={{ padding: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h3" color="initial">
              Find your best services
            </Typography>
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
              nobis sapiente temporibus, voluptas ratione et quo sunt vel aut
              dolorum. Recusandae, consequatur. Vero amet earum aliquid tempora
              nobis culpa.
            </Typography>
            <Box>
              <Button variant="contained">Download My Resume</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img src={bannerImg} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
