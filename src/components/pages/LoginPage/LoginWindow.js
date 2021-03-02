import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@material-ui/core";
import loginBackground from "../../../assets/images/img6.jpg";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function RegistroPage() {
  const classes = useStyles();
  return (
    <div
      className={classes.backGround}
      style={{
        /* minHeight: "100vh", */
        position: "relative",
        /* paddingBottom: "20em", */
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignitems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={6}>
          <img
            src={loginBackground}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="loginBackground"
          />
        </Grid>
        <Grid container direction="column" item xs={12} sm={6}>
          <div />
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
