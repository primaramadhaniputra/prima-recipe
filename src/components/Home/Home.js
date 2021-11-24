import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useGlobalContext } from "../../context";
import "./home.css";
import useStyles from "./style";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Home() {
  const { defaultData } = useGlobalContext();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <section className="home-container">
      <article className="banner">
        <div className="banner-title">
          <Typography variant="h2" className={classes.bannerTitle}>
            Simply Recipes
          </Typography>
          <Typography variant="h5">No Fluff, Just Recipes</Typography>
        </div>
      </article>
      <article className="home-content">
        <Grid container my={3} spacing={3} marginBottom={20}>
          <Grid item xs={12} md={4} style={{ height: "100%" }}>
            <Typography variant="h4">Recipes</Typography>
            <Grid container spacing={1} className={classes.widthContent} my={1}>
              <Grid item sm={3} md={12} xs={12}>
                <Button href="/recipes" color="secondary" variant="contained" disableElevation fullWidth={isMobile && true}>
                  Beef
                </Button>
              </Grid>
              <Grid item sm={3} md={12} xs={12}>
                <Button href="/recipes" color="secondary" variant="contained" disableElevation fullWidth={isMobile && true}>
                  BreakFast
                </Button>
              </Grid>
              <Grid item sm={3} md={12} xs={12}>
                <Button href="/recipes" color="secondary" variant="contained" disableElevation fullWidth={isMobile && true}>
                  Carrots
                </Button>
              </Grid>
              <Grid item sm={3} md={12} xs={12}>
                <Button href="/recipes" color="secondary" variant="contained" disableElevation fullWidth={isMobile && true}>
                  Foods
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {defaultData.length < 1 ? (
            <Typography variant="h3" align="center">
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

export default Home;
