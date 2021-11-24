import { Button, Card, CardActionArea, CardActions, CardContent, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography, TextareaAutosize, CardMedia } from "@mui/material";
import React from "react";
import { useStyle } from "./style";
import { useGlobalContext } from "../../context";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Contact() {
  const classes = useStyle();
  const { defaultData } = useGlobalContext();

  return (
    <>
      <Grid spacing={5} container alignItems="center" style={{ minHeight: "50vh", padding: "2rem 1.3rem" }}>
        <Grid item md={6} xs={12} s>
          <Typography marginBottom="2rem" variant="h3">
            Want To Get In Touch?
          </Typography>
          <Typography marginBottom="1rem" variant="subtitle1">
            Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
          </Typography>
          <Typography marginBottom="1rem" variant="subtitle1">
            Cardigan prism bicycle rights put a bird on it deep v.
          </Typography>
          <Typography marginBottom="1rem" variant="subtitle2">
            Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={6} className={classes.cardMargin}>
            <CardActionArea>
              <CardContent>
                <FormControl fullWidth>
                  <TextField className={classes.title} color="secondary" helperText="Please enter your name" id="demo-helper-text-aligned" label="Your Name" />
                  <TextField className={classes.title} color="secondary" helperText="Please enter your email" id="demo-helper-text-aligned" label="Your Email" />
                  <TextareaAutosize aria-label="minimum height" minRows={6} />
                </FormControl>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant="contained" color="secondary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Typography marginTop={5} variant="h5" letterSpacing={1} align="center">
        Look At This Awesomesouce!
      </Typography>
      <Grid container spacing={3} my={3} marginBottom={5}>
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
    </>
  );
}

export default Contact;
