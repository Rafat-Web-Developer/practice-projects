import { Box, Grid, Typography } from "@mui/material";
import Service from "./Service";

const Services = () => {
  return (
    <Box margin="50px 0px">
      <Box textAlign="center" paddingBottom="50px">
        <Typography gutterBottom variant="h4">
          My services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
      </Grid>
    </Box>
  );
};

export default Services;
