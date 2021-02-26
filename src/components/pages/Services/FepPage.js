import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import gridBackground from "../../../assets/images/squares.png";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function FepPage() {
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
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" style={{ fontSize: "3rem" }}>
                  Fondo Especial para Programas
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  El Fondo Especial para la elaboración de programas se ha
                  constituido para financiar entre otros, los siguientes:
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  <li>Turismo y Recreación</li>
                  <li>Línea Blanca</li>
                  <li>Línea Marrón</li>
                  <li>Equipos dde Computación</li>
                  <li>Utiles Escolares y Uniformes</li>
                  <li>Libros y Publicaciones</li>
                  <li>Matrícula Escolar y Universitaria</li>
                  <li>Artículos del Hogar</li>
                  <li>Programas de Salud</li>
                  <li>Cualquier otro programa en beneficio de los Asociados</li>
                </ul>
              </Grid>
              <Grid item>
                <Typography variant="body1">Requisitos:</Typography>
              </Grid>
              <Grid item>
                <ul>
                  <li>
                    Ser asociado con una antigüedad mínima ininterrumpida de un
                    (1) año en la misma.
                  </li>
                  <li>No tener deuda con la asociación.</li>
                  <li>
                    Llenar la planilla de solicitud de préstamo con todos los
                    datos exigidos en la misma y firmada por el solicitante.
                  </li>
                  <li>Copia de la cédula de identidad.</li>
                  <li>Copia del último recibo de pago.</li>
                  <li>
                    Original del presupuesto del bien por el cual se va a pedir
                    el préstamo.
                  </li>
                  <li>
                    Hacer llegar la planilla de solicitud al delegado
                    representante de CAPRES en la región donde se encuentre
                    ubicado, para que este asigne un número.
                  </li>
                  <li>
                    El asociado deberá firmar documentos que garanticen, la
                    deuda, hasta el total cumplimiento del préstamo.
                  </li>
                  <li>
                    El monto del crédito se otorgará tomando en cuenta la
                    disponibilidad de los haberes.
                  </li>
                  <li>
                    Si los haberes disponibles es igual o mayor a Bs. 6.000.000
                    el préstamo será por el doble de esa cantidad.
                  </li>
                  <li>
                    Si los haberes disponibles es menor a Bs. 6.000.000 el
                    préstamo será por el triple de esa cantidad.
                  </li>
                  <li>
                    El plazo máximo para cancelar tal préstamo será de 3 años
                    cuando el monto sea mayor de Bs. 10.000.000, cuando el monto
                    sea inferior a Bs.10.000.000 el plazo para cancelar será de
                    2 años.
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
