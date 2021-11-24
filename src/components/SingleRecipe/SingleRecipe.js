import { Card, CardMedia, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function SingleRecipe() {
  const { detail, getFeedDetail } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    getFeedDetail(id);
  }, [id]);

  if (detail.length < 1) {
    return (
      <Typography variant="h2" align="center">
        Loading...
      </Typography>
    );
  }

  const {
    display: { displayName, images },
    content: {
      description: { text },
      details: { totalTime },
      tags: { course, dish, technique },
      preparationSteps,
      ingredientLines,
      nutrition: { nutritionEstimates },
    },
  } = detail[0];

  return (
    <Container>
      <Grid container my={6} spacing={3}>
        <Grid item md={6} xs={12} marginBottom="1rem">
          <Card>
            <CardMedia component="img" height="300px" image={images[0]} alt="green iguana" />
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography marginBottom="1rem" variant="h4">
            {displayName}
          </Typography>
          <Typography marginBottom="1rem" variant="body2">
            {text}
          </Typography>
          <Typography marginBottom="1rem" variant="body1">
            <AccessTimeFilledIcon color="secondary" fontSize="large" /> TotalTime : {totalTime}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} marginBottom={5}>
        <Grid item md={6} xs={12}>
          <Typography marginBottom="1rem" variant="h4">
            PreparationSteps :
          </Typography>
          {preparationSteps?.map((item, index) => {
            return (
              <Typography key={index} marginBottom="1rem" variant="body1">
                {++index} : {item}
              </Typography>
            );
          })}
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography marginBottom="1rem" variant="h4">
            Ingridients :
          </Typography>
          {ingredientLines?.map((item, index) => {
            return (
              <Typography key={index} marginBottom="1rem" variant="body1">
                {++index} : {item.ingredient}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
      <Typography marginBottom="1.5rem" variant="h4">
        Nutritions :
      </Typography>
      {nutritionEstimates?.map((item, index) => {
        return (
          <Typography key={index} marginBottom="1rem" variant="body2">
            {++index} : {item.attribute} {item.value}
            {item.unit.abbreviation}
          </Typography>
        );
      })}
    </Container>
  );
}

export default SingleRecipe;
