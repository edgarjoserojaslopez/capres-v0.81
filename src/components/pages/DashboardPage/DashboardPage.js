import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";

//AUTH Setting Up
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Typography } from "@material-ui/core";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
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
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/login",
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
      <div>
        <Typography variant="h3">Dashboard Component</Typography>

        {/* displaying our message from our API call */}
        <Typography variant="body2">{message}</Typography>

        {/* logout */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
