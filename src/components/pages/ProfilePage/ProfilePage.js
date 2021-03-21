import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import Image from "../../../assets/person.svg";
//AUTH Setting Up
import axios from "axios";
import Cookies from "universal-cookie";
import {
  Avatar,
  Button,
  fade,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Mail, MailOutlined, Person } from "@material-ui/icons";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  imageRoot: {
    width: "10rem",
    color: theme.palette.common.capresOrange,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
  },
  paperSecondary: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: fade(theme.palette.primary.light, 0.3),
  },
  mailOutlinedStyle: {
    color: fade(theme.palette.common.capresBlue, 0.75),
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
  },
}));

export default function DashboardPage() {
  // set an initial state for the message we will receive after the API call
  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost/php-login-registration-api/user-info",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  };

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
      <Grid container spacing={2}>
        <Grid item sm={12} md={3} lg={4} style={{ width: "100%" }}>
          <Paper elevation={4} className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={Image}
                  alt="Profile Avatar"
                  className={classes.imageRoot}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">Edgar Rojas</Typography>
                <Typography variant="body2">Jubilado</Typography>
              </Grid>
              <br />
              <Grid item style={{ width: "100%" }}>
                <Paper
                  className={classes.paperSecondary}
                  elevation={3}
                  style={{ width: "100%" }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justify="flex-start"
                    style={{ flexWrap: "wrap" }}
                  >
                    <Grid item>
                      <Mail className={classes.mailOutlinedStyle} />
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h6">
                            {" "}
                            Correo Electrónico
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Typography>ejrl64@hotmail.com</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <br />
              <Grid item style={{ width: "100%" }}>
                <Paper
                  className={classes.paperSecondary}
                  elevation={3}
                  style={{ width: "100%" }}
                >
                  <Grid container alignItems="center" justify="flex-start">
                    <Grid item>
                      <Person className={classes.mailOutlinedStyle} />
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography variant="h6">
                            {" "}
                            Nombre de Usuario
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Typography>Brainhell</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          item
          sm={12}
          md={9}
          lg={8}
          style={{
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Paper elevation={4} className={classes.paper}>
            <Typography>Hola</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="body2">{message}</Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}
