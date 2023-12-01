import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import cardImg from "../../assets/images/download.jpeg";

const Service = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ boxShadow: "3" }}>
        <CardMedia sx={{ height: 220 }} image={cardImg} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Service 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            explicabo dolorum, amet ipsa dolore sint? Cum ratione pariatur
            suscipit quae? Id unde necessitatibus tempore asperiores, suscipit
            sapiente facilis ratione vel?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Service;
