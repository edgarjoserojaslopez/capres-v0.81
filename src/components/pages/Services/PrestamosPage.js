import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function PrestamosPage() {
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
              Préstamos Personales
            </Typography>
            <Typography variant="body1">
              CAPRES podrá conceder a los asociados que tengan una antigüedad
              superior a seis (6) meses las siguientes clases de préstamos:
            </Typography>
          </Grid>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">Préstamos a Corto Plazo</Typography>
              <p>
                Se refiere a aquellos préstamos que el asociado puede pagar,
                descontado por nómina en un máximo de doce (12) cuotas al 8% de
                interés anual, además podrá incluir una cuota especial a ser
                descontada de los aguinaldos.
              </p>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">Préstamos a Mediano Plazo</Typography>
              <p>
                Son aquellos préstamos que el asociado puede pagar, descontado
                por nómina en un máximo de venticuatro (24) cuotas al 10% de
                interés anual, además podrá incluir hasta dos (02) cuotas
                especiales a ser descontadas de los aguinaldos.
              </p>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">Préstamos a Largo Plazo</Typography>
              <p>
                Son aquellos préstamos que el asociado puede pagar, descontado
                por nómina, en un máximo de treinta y seis (36) cuotas al 12% de
                interés anual, además podrá incluir hasta tres (03) cuotas
                especiales a ser descontadas de los aguinaldos.
              </p>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="body1">
                Condiciones para otorgar préstamos:
              </Typography>
              <p>
                El monto máximo deberá ser el 80% de los haberes que mantenga el
                Asociado en CAPRES, una vez deducido el monto afianzado y la
                reserva legal la cual es del 20% de los haberes.
              </p>
              <p>
                Si el asociado tiene un préstamo y desea solicitar otro del
                mismo tipo, deberá cumplir con lo siguiente:
              </p>
              <ul>
                <li>
                  El saldo del Préstamo anterior deberá ser menor o igual al 50%
                  del monto otorgado.
                </li>
                <li>
                  El monto máximo a prestar deberá ser el 80% de los haberes que
                  mantenga en CAPRES, una vez deducido el monto afianzado, el
                  saldo del préstamo anterior y la reserva legal la cual es del
                  20% de los haberes.
                </li>
              </ul>
              <p>
                Si el asociado solicita un préstamo mayor a su disponibilidad de
                haberes en CAPRES, deberá presentar fianza de uno hasta tres
                asociados, que mantengan disponibilidad suficiente para
                responder por el monto afianzado.
              </p>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="body1">
                Requisitos para solicitar préstamos:
              </Typography>
              <ul>
                <li>Solicitud debidamnente llenada y firmada.</li>
                <li>Fotocopia de la cédula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago reciente de la 2da. quincena.
                </li>
              </ul>
              <Typography variant="body1">
                En caso de emergencia, se deberá anexar a la solicitud:
              </Typography>
              <p>
                Carta de exposición de motivos y soportes que justifiquen la
                urgencia.
              </p>
              <Typography variant="body1">
                En caso de solicitar préstamo con fiadores, se deberá anexar a
                la solicitud:
              </Typography>
              <ul>
                <li>Fotocopia de la cédula de identidad de los fiadores.</li>
                <li>
                  Fotocopia de recibo de pago reciente de la @da. quincena de
                  los fiadores.
                </li>
              </ul>
              <Typography variant="body1">
                En caso de personal contratado:
              </Typography>
              <p>
                No aplican préstamos afianzados. Sólo podrán solicitar préstamos
                por el monto máximo disponible de sus haberes.
              </p>
              <Typography variant="body1">
                NOTA: El número máximo de fiadores deberá ser de (4) cuatro
                asociados por solicitante
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
