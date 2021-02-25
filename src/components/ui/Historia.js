import { Grid, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { MemoryRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  lateralStyle: {
    backgroundColor: theme.palette.common.capresBlue,
    color: theme.palette.common.capresGrey,
    padding: theme.spacing(2),
  },
}));

export default function Historia() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Paper elevation={4}>
          <Grid container direction="column" style={{ marginBottom: "16px" }}>
            <Grid item className={classes.lateralStyle}>
              <Typography variant="h3" style={{ color: "white" }}>
                Historia
              </Typography>
            </Grid>
            <Grid item style={{ padding: "10px" }}>
              <Grid container direction="column">
                <ul>
                  <li>
                    <Grid item>
                      <Link href="/historia" style={{ textDecoration: "none" }}>
                        <Typography>Historia de CAPRES</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link href="/junta" style={{ textDecoration: "none" }}>
                        <Typography>Junta Directiva</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link
                        href="/organizacion"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>Organización Administrativa</Typography>
                      </Link>
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      <Link
                        href="/estructura"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>Estructura Organizativa</Typography>
                      </Link>
                    </Grid>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Router>
    </div>
  );
}
