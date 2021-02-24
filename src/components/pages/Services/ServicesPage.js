import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import imgHaberes from "../../../assets/svg/undraw_transfer_money_rywa.svg";
import onlineBanking from "../../../assets/svg/undraw_online_banking_7jy4.svg";
import homeImg from "../../../assets/svg/undraw_at_home_octe.svg";
import vehicleImg from "../../../assets/svg/undraw_Vehicle_sale_a645.svg";
import fepImg from "../../../assets/svg/undraw_mobile_user_7oqo.svg";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  leftGrid: {
    marginLeft: theme.spacing(2),
  },
  typoStyle: {
    textAlign: "center",
  },
  overflowServices: {
    overflowX: "hidden !important",
  },
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function ServicesPage() {
  const classes = useStyles();
  return (
    <div
      className={classes.backGround}
      style={{ overflow: "hidden", minHeight: "100vh !important" }}
    >
      {" "}
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h1" className={classes.typoStyle}>
            Servicios
          </Typography>
          <br />
          <Typography variant="h4" className={classes.typoStyle}>
            Lo que ofrecemos a nuestros asociados
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid item container direction="column" alignItems="flex-start">
              <Typography variant="h4">Retiro de Haberes</Typography>
              <Button variant="outlined">Procesar</Button>
            </Grid>
          </Grid>

          <Grid item>
            <img
              alt="retiro de haberes"
              src={imgHaberes}
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row-reverse"
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid item container direction="column" alignItems="flex-start">
              <Typography variant="h4">Prestamos Personales</Typography>
              <Button variant="outlined">Procesar</Button>
            </Grid>
          </Grid>

          <Grid item>
            <img
              alt="retiro de haberes"
              src={onlineBanking}
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid item container direction="column" alignItems="flex-start">
              <Typography variant="h4">Prestamos de Vivienda</Typography>
              <Button variant="outlined">Procesar</Button>
            </Grid>
          </Grid>

          <Grid item>
            <img
              alt="retiro de haberes"
              src={homeImg}
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row-reverse"
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid item container direction="column" alignItems="flex-start">
              <Typography variant="h4">Prestamos de Vehículos</Typography>
              <Button variant="outlined">Procesar</Button>
            </Grid>
          </Grid>

          <Grid item>
            <img
              alt="retiro de haberes"
              src={vehicleImg}
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={10}
        >
          <Grid item>
            <Grid item container direction="column" alignItems="flex-start">
              <Typography variant="h4">Fondo Especial (FEP)</Typography>
              <Button variant="outlined">Procesar</Button>
            </Grid>
          </Grid>

          <Grid item>
            <img
              alt="fondo"
              src={fepImg}
              style={{ height: "25rem", width: "25rem" }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
