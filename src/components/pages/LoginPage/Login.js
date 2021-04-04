import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Box, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  paper: {
    padding: theme.spacing(2),
    height: "60vh",
    width: "33vw",
    margin: "15vh auto",
  },
}));

export default function Login() {
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
      <Box>
        <Paper elevation={10} className={classes.paper}>
          Login
        </Paper>
      </Box>
    </div>
  );
}
