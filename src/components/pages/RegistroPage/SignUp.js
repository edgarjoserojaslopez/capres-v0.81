import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
  },
  paper: {
    padding: theme.spacing(4),
    height: "50vh",
    width: "33vw",
    margin: "15vh auto",
  },
  avatarStyle: {
    backgroundColor: theme.palette.common.capresBlue,
  },
  btnStyle: {
    margin: "8px 0",
  },
}));

export default function SignUp() {
  const [name, setName] = React.useState("          ");
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const preventDefault = (e) => e.preventDefault();
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
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon className={classes.iconStyle} />
            </Avatar>
            <h2>Registro</h2>
          </Grid>

          <TextField
            label="Nombre Completo"
            placeholder="Ingresa tu nombre"
            fullWidth
            required
            size="normal"
            type="text"
            variant="outlined"
            margin="dense"
            value={name}
          />
          <TextField
            label="Nombre de Usuario"
            placeholder="Nombre de Usuario"
            fullWidth
            required
            size="normal"
            type="text"
            variant="outlined"
            margin="dense"
            value={username}
          />
          <TextField
            label="Email"
            placeholder="Correo Electrónico"
            fullWidth
            required
            size="normal"
            type="email"
            variant="outlined"
            margin="dense"
          />
          <TextField
            label="Password"
            placeholder="Ingresa Password"
            fullWidth
            required
            type="password"
            size="normal"
            variant="outlined"
            margin="dense"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.btnStyle}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Registro
          </Button>

          <Typography>
            Ya tienes una cuenta?
            <Link to="/login"> Ingresa aquí</Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
