import { Grid, Typography } from "@mui/material";
import React from "react";

function Error() {
  return (
    <Grid container justifyContent="center" my={10}>
      <Grid>
        <Typography variant="h1">404</Typography>
        <Typography variant="h5">Page Not Found</Typography>
      </Grid>
    </Grid>
  );
}

export default Error;
