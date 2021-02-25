import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function ViviendaPages() {
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
              Préstamos para Vivienda
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
                Préstamos para adquisición de Vivienda Principal
              </Typography>
              <p>
                Los prestamos especiales para adquisición de vivienda principal
                tienen un plazo para la cancelacion de Doce (12) años, a una
                tasa del 10% anual, descontando cuotas anuales especiales
                provenientes de hasta tres (3) meses de aguinaldo y mes y medio
                (1,5) de la doble remuneracion.
              </p>
              <Typography variant="body1">
                Requisitos para solicitar préstamos para adquisición de
                vivienda:
              </Typography>
              <ul>
                <li>Solicitud debidamente sellada y firmada.</li>
                <li>Fotocopia de la cedula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
                </li>
                <li>
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado.
                </li>
              </ul>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">
                Préstamos para Remodelacion de Vivienda Principal:
              </Typography>
              <p>
                Los prestamos para Remodelación de vivienda principal tienen un
                plazo para la cancelacion de Seis (6) años, a una tasa del 12%
                anual, descontando cuotas anuales especiales provenientesd de
                hasta dos (2) meses de aguinaldo y Un mes (1) de la doble
                remuneracion.
              </p>
              <ul>
                <li>
                  De los aguinaldos en un máximo de cuatro (4) cuotas, dos (2)
                  por cada año.
                </li>
                <li>
                  De la Doble Remuneración, con un máximo de cuatro (4) cuotas,
                  una (1) por cada año.
                </li>
              </ul>
              <Typography variant="body1">
                Requisitos para solicitar préstamos para remodelación de
                vivienda:
              </Typography>
              <ul>
                <li>Solicitud debidamente sellada y firmada.</li>
                <li>Fotocopia de la cédula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago de la 2da. quincena. Reciente.
                </li>
                <li>
                  Inscribirse en el libro de solicitudes que lleva el delegado
                  de la región a la cual pertenece el asociado
                </li>
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
