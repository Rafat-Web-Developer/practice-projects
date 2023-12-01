import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

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
              <Button variant="contained" endIcon={<DownloadForOfflineIcon />}>
                <Link
                  sx={{ color: "white" }}
                  href="https://drive.google.com/file/d/1Q7pHE5KBYHHFYs9OR4pR9k0AvujCwrkP/view?usp=sharing"
                  underline="none"
                  target="_blank"
                >
                  Download My Resume
                </Link>
              </Button>
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
