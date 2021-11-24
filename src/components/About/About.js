import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import { useGlobalContext } from "../../context";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function About() {
  const classes = useStyles();
  const { defaultData } = useGlobalContext();

  return (
    <section className={classes.container}>
      <Grid spacing={3} alignItems="center" container style={{ minHeight: "50vh" }}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.heading} variant="h4">
            I'm baby coloring book poke taxidermy
          </Typography>
          <Typography className={classes.heading} variant="body1">
            Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
          </Typography>
          <Typography className={classes.title} variant="body2">
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
          </Typography>
          <Button href="/contact" color="secondary" className={classes.title} variant="contained">
            Contact
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia height="350" component="img" alt="dinner" image="./img/dinner2.jpg" />
          </Card>
        </Grid>
      </Grid>
      <article className={classes.container}>
        <Typography variant="h5" letterSpacing={1} align="center">
          Look At This Awesomesouce!
        </Typography>
        <Grid container spacing={3} my={3}>
          {defaultData.length < 1 ? (
            <Typography style={{ width: "100%" }} variant="h3" align="center">
              Loading...
            </Typography>
          ) : (
            defaultData.map((item, index) => {
              const {
                display: { displayName, images },
                content: {
                  description: { text },
                  details: { globalId },
                },
              } = item;
              return (
                <Grid item xs={12} md={4} key={index}>
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
                </Grid>
              );
            })
          )}
        </Grid>
      </article>
    </section>
  );
}

export default About;
