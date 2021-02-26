import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
}));

function createData(region, delegado, telefono) {
  return { region, delegado, telefono };
}

const rows = [
  createData("Aduana Marítima (La Guaira)", "Janeth Vera", "(0416) 303.89.82"),
  createData(
    "Aduana Aérea (Maiquetía)",
    "Gustavo Colmenares",
    "(0414) 232.43.98"
  ),
  createData(
    "Aduana Aérea (Maiquetía)",
    "Vigee Torres (Suplente)",
    "(0414) 232.43.98"
  ),
  createData("Región Capital (Los Ruices)", "Lila Santos", "(0414) 260.09.85"),
  createData(
    "Región Capital (Los Ruices)",
    "Gladys Echenagucia (Suplente)",
    "(0212) 207.25.94"
  ),
  createData("Región Capital (CE)", "Valentina Martínez", "(0414) 324.52.90"),
  createData(
    "Región Capital (CE)",
    "Irene Villamizar (Suplente)",
    "(0416) 303.89.82"
  ),
  createData("Mata de Coco", "Nelly Mendoza", "(0416) 634.99.87"),
  createData("Mata de Coco", "Nelson Ramos", "(0212) 709.20.08"),
  createData("Región Central", "Dora Guilléns", "(0414) 482.41.79"),
  createData(
    "Aduana Marítima (Pto. Cabello)",
    "Ana Hilda Andara",
    "(0424) 499.09.81"
  ),
  createData("Sector Maracay", "Luz Marina Molina", "(0416) 643.16.38"),
  createData("Región Los Llanos", "Carolina Pérez", "(0246) 431.31.68"),
  createData(
    "Región Centro Occidental",
    "Tomas Valderrama",
    "(0412) 517.53.56"
  ),
  createData(
    "Región Zuliana (Tributos)",
    "Gigliola D'Adosio",
    "(0414) 668.13.55"
  ),
  createData(
    "Región Zuliana (Tributos)",
    "María José Bracho (Suplente)",
    "(0261) 796.24.32"
  ),
  createData("Región Zuliana (Aduana)", "Ramón Segovia", "(0416) 662.00.56"),
  createData(
    "Región Zuliana (Aduana)",
    "Feralia Toro (Suplente)",
    "(0261) 796.22.14"
  ),
  createData("Región Los Andes", "Mayra Santander", "(0414) 715.36.51"),
  createData(
    "Región Los Andes",
    "Willian Castillo (Suplente)",
    "(0414) 715.36.51"
  ),
  createData("Región Nororiental", "José Luis Prado", "(0416) 580.13.12"),
  createData("Región Nororiental", "José Luis Prado", "(0416) 580.13.12"),
];

export default function DelegadosPage() {
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
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Box p={2} m={2}>
            <Grid container direction="column" style={{ padding: "16px" }}>
              <Grid item>
                <Typography variant="h3">Delegados Regionales</Typography>
              </Grid>
              <Grid item>
                <p>
                  <Typography>
                    Los Delegados son los representantes de los Asociados de
                    CAPRES por cada región Administrativa, debidamente electos
                    en Asamblea parcial de Asociados y acreditados ante el
                    Consejo de Administración y de Vigilancia de la Asociación.
                  </Typography>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Box p={3} m={2} style={{ width: "750px" }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Delegados actuales de CAPRES
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Región Administrativa</TableCell>
                    <TableCell align="left">Delegado(s)</TableCell>
                    <TableCell align="left">Teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.delegado}>
                      <TableCell align="left">{row.region}</TableCell>
                      <TableCell align="left">{row.delegado}</TableCell>
                      <TableCell align="left">{row.telefono}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
