import React, { useState } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import Cookies from "universal-cookie";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import {
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  root: {
    height: "100vh",
    /* minWidth: "50vw", */
  },

  paper: {
    margin: theme.spacing(6, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justify: "space-between",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  //Styles
  const classes = useStyles();
  // initial state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost/php-login-registration-api/register",
      data: {
        name,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div
      className={classes.backGround}
      style={{
        height: "100vh",
        position: "relative",
        /* paddingBottom: "20em", */
      }}
    >
      <Grid
        container
        direction="row"
        component="main"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography variant="h3">Registro</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* email */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                type="name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* submit button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Registro
              </Button>

              {/* display success message */}
              {register ? (
                <p className="text-success">You Are Registered Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Registered</p>
              )}
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
