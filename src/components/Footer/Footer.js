import { Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import useStyles from "./style";
function Footer() {
  const classes = useStyles();
  const footer = useRef(null);

  return (
    <footer ref={footer} className={classes.footer}>
      <Typography variant="h4" color="whitesmoke">
        SimplyRecipes
      </Typography>
    </footer>
  );
}

export default Footer;
