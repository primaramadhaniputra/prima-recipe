import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router";

const useStyles = makeStyles({
  links: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    marginLeft: 30,
  },
  logo: {
    color: "#9c27b0",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: "50vw" }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {["Home", "About", "Tags", "Recipes"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h4" sx={isMobile ? { flexGrow: 1 } : null}>
            <span className={classes.logo}>Simply</span>Recipes
          </Typography>

          {isMobile && (
            <>
              <Button variant="contained" color="secondary" onClick={toggleDrawer("right", true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)} onOpen={toggleDrawer("right", true)}>
                {list("right")}
              </SwipeableDrawer>
            </>
          )}

          {isMobile || (
            <>
              <div className={classes.links}>
                <Button href="/" color={`${location.pathname === "/" ? "secondary" : "inherit"}`}>
                  Home
                </Button>
                <Button href="/about" color={`${location.pathname === "/about" ? "secondary" : "inherit"}`}>
                  About
                </Button>
                <Button href="/recipes" color={`${location.pathname === "/recipes" ? "secondary" : "inherit"}`}>
                  Recipes
                </Button>
              </div>
              <Button href="/contact" variant="contained" color="secondary">
                {" "}
                contact
              </Button>
            </>
          )}
        </Toolbar>
      </Box>
    </>
  );
}
