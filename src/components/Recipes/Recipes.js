import { Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, Input, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Masonry from "react-masonry-css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
function Recipes() {
  const { feed, getFeed } = useGlobalContext();
  const [id, setId] = useState("beef");

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <Typography align="center" variant="h4" marginTop={3} marginBottom={3}>
        All Recipes...
      </Typography>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {feed.length < 1 ? (
          <Typography variant="h3" align="center">
            Loading...
          </Typography>
        ) : (
          feed.map((item, index) => {
            const {
              display: { displayName, images },
              content: {
                description: { text },
                details: { globalId },
              },
            } = item;
            return (
              <div key={index}>
                <Card elevation={6}>
                  <CardMedia component="img" height="140" image={images[0]} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {displayName}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      {text.substring(0, 100)}...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={`/singlerecipes/${globalId}`} endIcon={<DoubleArrowIcon />} size="small" color="secondary" variant="outlined">
                      Go Details
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        )}
      </Masonry>
    </div>
  );
}

export default Recipes;
