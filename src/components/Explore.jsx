import React from 'react';
// import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card, Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@mui/material';

const Explore = ({ products }) => {
  // const history = useHistory();

  // const handleClick = () => {
  //   // Redirect to the "/other" route when the button is clicked
  //   history.push('/other');
  // };

  return (
    <div>
      <h1>Explore Page</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Card sx={{ maxWidth: 345,  maxHeight:800}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={product.link}
                  alt="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.Product_Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{product.Price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Poasitive reviews: {product.Positive_Count}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Negative Reviews:{product.Negative_Count}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Neutral Reviews: {product.Neutral_Count}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary" >
                  View
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Explore;
