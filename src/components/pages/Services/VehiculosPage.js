import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function VehiculosPages() {
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
        <Grid container direction="column" style={{ padding: "2rem" }}>
          <Grid item container direction="column">
            <Typography variant="h4" style={{ fontSize: "3rem" }}>
              Préstamos de Vehículos
            </Typography>
            <Typography variant="body1">
              CAPRES otorgará préstamos a los Asociados que tengan más de:
            </Typography>
            <ul>
              <li>
                Seis (6) meses de antigüedad en el caso de Préstamos
                Hipotecarios.
              </li>
              <li>
                Seis (6) meses de antiguedad en el caso de Préstamos para
                Remodelación de Vivienda Principal.
              </li>
            </ul>
          </Grid>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">
                Préstamos para adquisición de Vehículos
              </Typography>
              <p>
                Estos préstamos se otorgan con reserva de dominio a favor de
                CAPRES sobre el vehículo adquirido, tienen un plazo para la
                cancelacion de cinco (5) años,a una tasa anual del 14% anual,
                descontando cuotas anuales especiales provenientesd de hasta dos
                meses y medio (2,5) de aguinaldo y mes y medio (1,5) de la doble
                remuneracion.
              </p>
              <Typography variant="body1">
                Requisitos para solicitar Prestamos para Adquisicion de
                Vehículos:
              </Typography>
              <ul>
                <li>Solicitud debidamente sellada y firmada.</li>
                <li>Fotocopia de la cédula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
                </li>
                <li>
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado. localhost:3000
                </li>
              </ul>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">
                Préstamos para Rescate Vehícular
              </Typography>
              <p>
                Estos préstamos se otorgan con reserva de dominio a favor de
                CAPRES sobre el vehículo adquirido, a una tasa anual del 14%
                anual,descontando cuotas anuales especiales provenientesd de
                hasta dos meses y medio (2,5) de aguinaldo y mes y medio (1,5)
                de la doble remuneracion.
              </p>
              <Typography variant="body1">
                Requisitos para solicitar Prestamos para Rescate Vehicular:
              </Typography>
              <ul>
                <li>Solicitud debidamente sellada y firmada.</li>
                <li>Fotocopia de la cédula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
                </li>
                <li>
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado. localhost:3000
                </li>
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
