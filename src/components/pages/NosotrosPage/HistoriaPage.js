import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import Historia from "../../ui/Historia";
import MarcoLegal from "../../ui/MarcoLegal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

function createData(nombre, cargo) {
  return { nombre, cargo };
}

const rows = [
  createData("Héctor Rivas P.", "Presidente"),
  createData("Alicia de Uzcátegui.", "Vice-Presidente"),
  createData("Luis Hernández", "Tesorero"),
  createData("Claudia Rodríguez", "Secretaria"),
  createData("Ender Parra", "Vocal"),
  createData("Gustavo Piñango", "Suplente"),
  createData("Rubén Nuñez", "Suplente"),
  createData("Antonio Tonelli", "Suplente"),
  createData("Tibizay Valderrama", "Suplente"),
];

const rowsSec = [
  createData("Fernando Villasmil", "Presidente"),
  createData("José Salinas", "Vice - Presidente"),
  createData("Lisel Landa", "Secretaria"),
  createData("Hernan Santana", "Suplente"),
  createData("Elina Pou Ruan", "Suplente"),
];

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
                  Historia de CAPRES - SENIAT
                </Typography>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <p style={{ textAlign: "justify" }}>
                  El día 22 de Junio de 1995, 53 funcionarios adscritos al
                  Servicio Nacional Integrado de Administración Tributaria
                  (SENIAT) se reunieron a objeto de constituir lo que es hoy “La
                  Caja de Ahorro y Previsión de los Empleados del Servicio
                  Nacional Integrado de Administración Aduanera y Tributaria
                  SENIAT – CAPRES”; teniendo por objeto principal establecer y
                  fomentar el ahorro sistemático y en general procurar para sus
                  asociados toda clase de beneficios socioeconómicos.
                </p>
                <p>La primera Junta Directiva estuvo conformada por:</p>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          Consejo de Administración
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Cargo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.nombre}>
                          <TableCell component="th" scope="row">
                            {row.nombre}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.cargo}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          Consejo de Vigilancia
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Cargo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsSec.map((row) => (
                        <TableRow key={row.nombre}>
                          <TableCell component="th" scope="row">
                            {row.nombre}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.cargo}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <p style={{ textAlign: "justify" }}>
                  En esta misma fecha fueron aprobados sus primeros estatutos,
                  los cuales experimentaron su primera modificación en Asamblea
                  Extraordinaria de Asociados celebrada el día 17 de Febrero de
                  2001
                </p>
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
