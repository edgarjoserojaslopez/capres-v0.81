import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function HaberesPage() {
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
              Retiro de Haberes
            </Typography>
            <Typography variant="body1">
              Los asociados podrán solicitar el retiro de haberes bien sea
              Parcial o Total
            </Typography>
          </Grid>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">Retiro Parcial</Typography>
              <p>
                El asociado que tenga mas de seis (06) meses de antigüedad en la
                asociación puede solicitar su retiro parcial, cuyo monto maximo
                será igual al 80% de los haberes una vez deducido el saldo de
                préstamos pendientes y las fianzas que mantenga el asociado con
                CAPRES.
              </p>
              <Grid item container direction="column">
                <Typography variant="body1">
                  Requisitos para solicitar el Retiro Parcial:
                </Typography>
                <ul>
                  <li>
                    Solicitud de retiro de haberes debidamente llenada y
                    firmada.
                  </li>
                  <li>Fotocopia de la cedula de identidad.</li>
                  <li>
                    Fotocopia del recibo de pago (Reciente) de la 2da. Quincena.
                  </li>
                </ul>
                <p>
                  En caso de tener solicitud de préstamo especial, y optara por
                  cancelar con sus haberes, los gastos administrativos y/o
                  inicial deberá señalarlo en la solicitud.
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box item p={2}>
            <Grid item container direction="column">
              <Typography variant="h3">Retiro Total</Typography>
              <p>
                El retiro total de los haberes sólo se permitirá cuando se
                pierda legalmente la condición de asociado o por retiro
                voluntario, en cuyo caso, se le entregará al asociado la
                cantidad líquida que tenga en su haber deducidas las cantidades
                que adeudare por concepto de préstamos y demás obligaciones
                contraídas con CAPRES.
              </p>
              <p>
                En caso de muerte del asociado, la entrega de haberes se
                realizará a los herederos correspondientes o a quienes hayan
                sido previamente designados por el asociado como beneficiarios.
                La Asociación tiene un plazo no mayor de tres (3) mes para
                liquidar las cuentas de los asociados retirados.
              </p>
              <p>
                En caso de retiros colectivos, dicho plazo podrá extenderse
                hasta tres (3) meses, en la medida en que CAPRES disponga de los
                fondos suficientes para atender dichos retiros; salvo casos de
                fuerza mayor no imputable a CAPRES quedará extendido dicho
                plazo.
              </p>
              <p>
                Los haberes de los ex-asociados deberán ser retirados en un
                lapso no mayor de un (1) año, contado a partir de la fecha
                efectiva del retiro. Transcurrido ese lapso, se considerarán
                ingresos extraordinarios perdiendo el asociado todo derecho de
                reclamo por éste concepto.
              </p>
              <Grid item container direction="column">
                <Typography variant="body1">
                  Requisitos para solicitar el Retiro Total:
                </Typography>
                <ul>
                  <li>
                    Solicitud de Retiro Total debidamente llenada y firmada.
                  </li>
                  <li>Fotocopia de la cédula de identidad.</li>
                  <li>Fotocopia de recibo de pago.</li>
                </ul>
                <Typography variant="body1">
                  En caso de fallecimiento del asociado, se deberá anexar a su
                  solicitud:
                </Typography>
                <ul>
                  <li>
                    Declaración de herederos universales. Autorización de un
                    tribunal para la emisión del cheque en caso de beneficiarios
                    menore sde edad
                  </li>
                </ul>
                <Typography variant="body1">
                  En caso de herederos menores de edad, se deberá anexar a la
                  solicitud:
                </Typography>
                <ul>
                  <li>
                    Copia de la partida de nacimiento de cada uno de los
                    herederos.
                  </li>
                </ul>
                <Typography variant="body1">
                  En caso del cónyuge , deberá anexarse a la solicitud:
                </Typography>
                <ul>
                  <li>Copia del acta de matrimonio.</li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
