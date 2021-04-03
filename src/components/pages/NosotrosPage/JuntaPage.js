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

function createData(cargo, nombre, suplente) {
  return { cargo, nombre, suplente };
}

const rows = [
  createData("Presidente", "Eloy Noriega", "Víctor Ojeda"),
  createData("Tesorero", "María Elena Barrios", "Miguel Maneiro"),
  createData("Secretario", "Alí León", "Raul Lucena"),
];

const rowsSec = [
  createData("Presidente", "Dora Castillo", "Luis Vidal"),
  createData("Tesorero", "Nestor Mendoza", "Daysi Seijas"),
  createData("Secretario", "Josefina Casteleiro", "Julio Terán"),
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
                <Typography variant="h3">Junta Directiva CAPRES</Typography>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <p style={{ textAlign: "justify" }}>
                  <Typography variant="body1">
                    Consejo de Administración:
                  </Typography>{" "}
                  Tiene a su cargo la administración y dirección de todas las
                  operaciones administrativas, financieras y económicas de la
                  Asociación.
                </p>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={3}>
                          Consejo de Administración
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="center">Cargo</TableCell>
                        <TableCell align="center">Titular</TableCell>
                        <TableCell align="center">Suplente</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="center" component="th" scope="row">
                            {row.cargo}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {row.nombre}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {row.suplente}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <p style={{ textAlign: "justify" }}>
                  <Typography variant="body1">
                    Consejo de Vigilancia:
                  </Typography>{" "}
                  Es el órgano encargado de velar por el estricto cumplimiento
                  de la Ley de Cajas de Ahorro y Fondos de Ahorro, su
                  Reglamento, Los Estatutos, Reglamentos Internos y las
                  decisiones de la Asamblea General de Delegados, así como del
                  correcto funcionamiento, administración y buen manejo de los
                  fondos de la Asociación.
                </p>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={3}>
                          Consejo de Vigilancia
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="center">Cargo</TableCell>
                        <TableCell align="center">Titular</TableCell>
                        <TableCell align="center">Suplente</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsSec.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="center" component="th" scope="row">
                            {row.cargo}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {row.nombre}
                          </TableCell>
                          <TableCell align="center" component="th" scope="row">
                            {row.suplente}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
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
