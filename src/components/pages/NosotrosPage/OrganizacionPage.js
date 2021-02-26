import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Box, Grid, Typography } from "@material-ui/core";
import Historia from "../../ui/Historia";
import MarcoLegal from "../../ui/MarcoLegal";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

export default function HistoriaPage() {
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
      <Grid container alignItems="flex-start">
        <Grid item xs={8}>
          <Box p={2} m={2}>
            <Grid container direction="column" style={{ padding: "16px" }}>
              <Grid item>
                <Typography variant="h3">
                  CAPRES: Organización Administrativa
                </Typography>
              </Grid>
              <Grid item style={{ padding: "16px" }}>
                <p>
                  <Typography>Asesoría Jurídica</Typography>
                  Es la instancia de consulta legal en lo relativo a la
                  interpretación de toda la normativa legal que rige la Caja de
                  Ahorro, así como de las decisiones, acuerdos y resoluciones
                  que adopten los Consejos de Administración y de Vigilancia, y
                  la Asamblea General de Delegados.
                </p>

                <p>
                  <Typography>Gerente Ejecutivo</Typography>
                  Es designado por el Consejo de Administración, siendo sus
                  deberes y atribuciones:
                </p>
                <ul>
                  <li>
                    Coordinar y supervisar directamente al personal que ocupa
                    las Jefaturas de las Divisiones de CAPRES e indirectamente
                    al resto del personal de cada División.
                  </li>
                  <li>
                    Los demás deberes y atribuciones que le establezca el
                    Consejo de Administración.
                  </li>
                </ul>
              </Grid>
              <Grid item style={{ padding: "16px" }}>
                <Typography>
                  La Organización Administrativa de CAPRES está conformada por
                  cinco (5) Divisiones:
                </Typography>
                <ul>
                  <li>
                    <p>
                      <span>
                        <strong>División de Operaciones: </strong>
                      </span>
                      Su labor principal es la administración de la información
                      de los afiliados y la prestación de los servicios que
                      estos requieran, con relación a préstamos, retiros de
                      haberes y reintegros, entre otros.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <strong>División de Finanzas: </strong>
                      </span>
                      Area responsable de la liquidación de los procesos
                      generados por la División de Operaciones y la de Planes y
                      Beneficios socio-económicos además de la elaboración,
                      manejo y ejecución del presupuesto, administrar, controlar
                      y custodiar las inversiones que realice CAPRES y demás
                      valores financieros.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <strong>División de Contabilidad: </strong>
                      </span>
                      Es el área responsable del manejo de la Contabilidad y la
                      elaboración y presentación del Balance General y el Estado
                      de Pérdidas y Ganancias.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <strong>
                          División de Planes de Inversiones y Beneficios
                          Socio-Económicos:{" "}
                        </strong>
                      </span>
                      Es la encargada de la ejecución de los programas de
                      beneficios sociales que realiza CAPRES, tales como
                      otorgamiento de Créditos con Garantía hipotecaria y
                      créditos para la adquisición de vehículos entre otros.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <strong>División de Informática: </strong>
                      </span>
                      Responde por el asesoramiento en cuanto a Sistemas de
                      información además de mantener los equipos de computación
                      operativos, dar soporte al personal de CAPRES en las
                      operaciones que éstos realizan.
                    </p>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={2} m={2}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="stretch"
            >
              <Grid item>
                <Historia />
              </Grid>

              <Grid item>
                <MarcoLegal />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
