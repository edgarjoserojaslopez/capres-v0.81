import React from "react";

import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

//imports for authentication
import { MyContext } from "../../../contexts/MyContext";
import { useContext, useState } from "react";
//imports for authentication ends here

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  root: {
    height: "100vh",
    /* minWidth: "50vw", */
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

function LoginPageMain() {
  //Login REST API
  const { toggleNav, loginUser, isLoggedIn } = useContext(MyContext);

  const initialState = {
    userInfo: {
      email: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
  };

  const [state, setState] = useState(initialState);

  // On change input value (email & password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await loginUser(state.userInfo);
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
      localStorage.setItem("loginToken", data.token);
      await isLoggedIn();
      //make a popup alert showing the "submited" text
      alert("Submited");
    } else {
      setState({
        ...state,
        successMsg: "",
        errorMsg: data.message,
      });
    }
  };

  // Show Message on Error or Success
  let successMsg = "";
  let errorMsg = "";
  if (state.errorMsg) {
    errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

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
        component="main"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <CssBaseline />
        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form onSubmit={submitForm} className={classes.form} noValidate>
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
                value={state.userInfo.email}
                onChange={onChangeValue}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.userInfo.password}
                onChange={onChangeValue}
              />
              {errorMsg}
              {successMsg}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <button type="submit" className={classes.submit}>
                Login
              </button>

              <Box mt={5}></Box>
            </form>
            <Grid container>
              <Grid item>
                <Button color="primary">Olvidé mi contraseña</Button>
              </Grid>
              <Grid item>
                <button color="primary" onClick={toggleNav}>
                  No tienes una cuenta? Regístrate
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPageMain;
