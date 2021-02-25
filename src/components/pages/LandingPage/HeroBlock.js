import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/img6.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundImage: `url(${bgImage})`,
    overflowX: "hidden",
  },
  services: {
    position: "relative",
  },
  textClass: {
    fontFamily: "Roboto",
    fontSize: "8em",
    fontWeight: "700",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
      fontWeight: "700",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.65rem",
      fontWeight: "700",
    },
  },
  textClassSubtitle: {
    fontSize: "3em",
    fontWeight: "400",
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      fontWeight: "600",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
  },
  buttonRoot: {
    borderRadius: 0,
    left: "3em",
    width: "10rem",
    height: "4rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
      fontWeight: "700",
      width: "8rem",
      height: "3.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      left: "0.5rem",
      fontSize: "0.65rem",
      fontWeight: "700",
      width: "7rem",
      height: "2.8rem",
      margin: "0px",
      padding: "0px",
    },
  },
  buttonLabel: {
    color: theme.palette.primary.light,
  },
}));

export default function HeroBlock() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="stretch"
      direction="column"
      /*  flexWrap="no-wrap" */
      /* spacing={2} */
    >
      <Grid item className={classes.services}>
        {/* Hero BLock */}
        <Typography component="div" classes={{ body1: classes.textClass }}>
          <Box textAlign="justify" lineHeight={1} m={4}>
            Bienvenido a<br />
            CAPRES
          </Box>
        </Typography>
        <Typography
          component="div"
          classes={{ body1: classes.textClassSubtitle }}
        >
          <Box textAlign="justify" lineHeight={1} m={4}>
            Estamos para servirte...
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Box component="div" m={2} p={2}>
              <Button
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel,
                }}
                variant="contained"
                color="secondary"
                size="large"
                href="/login"
                target="_blank"
              >
                Tu cuenta
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box component="div" m={2} p={2}>
              <Button
                classes={{ root: classes.buttonRoot }}
                variant="outlined"
                color="secondary"
                size="large"
                href="/registro"
                target="_blank"
              >
                Registrate
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
