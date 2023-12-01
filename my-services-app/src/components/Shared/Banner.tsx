import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

type BannerProps = {
  bannerImg: any;
  bannerTitle: string;
  bannerText: string;
};

const Banner: React.FC<BannerProps> = ({
  bannerImg,
  bannerTitle,
  bannerText,
}) => {
  return (
    <Box sx={{ padding: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h3" color="initial">
              {bannerTitle}
            </Typography>
            <Typography variant="body1" color="initial">
              {bannerText}
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
