import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  gridPadding: {
    padding: theme.spacing(2),
    /* margin: theme.spacing(1), */
  },
  gridMargin: {
    padding: theme.spacing(4),
    /* margin: theme.spacing(1), */
  },
}));

export default function NosotrosPage() {
  const classes = useStyles();
  return (
    <div
      className={classes.backGround}
      style={{
        minHeight: "100vh",
        position: "relative",
        /* paddingBottom: "20em", */
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.gridMargin}
      >
        <Grid item xs={12} sm={12} md={8} className={classes.gridPadding}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3">Principal</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.gridPadding}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3">Lateral</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
