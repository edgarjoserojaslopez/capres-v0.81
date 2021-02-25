import React from "react";
import { makeStyles } from "@material-ui/styles";
import gridBackground from "../../../assets/images/squares.png";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Historia from "../../ui/Historia";
import MarcoLegal from "../../ui/MarcoLegal";

const useStyles = makeStyles((theme) => ({
  backGround: {
    background: `url(${gridBackground})`,
    flexGrow: 1,
  },
  gridPadding: {
    padding: theme.spacing(2),
    /* marginLeft: "10px", */
    backgroundColor: theme.palette.common.capresOrange,
    /* margin: theme.spacing(1), */
  },
  gridMargin: {
    padding: theme.spacing(4),
    /* margin: theme.spacing(1), */
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonRoot: {
    background:
      theme.palette.common
        .capresOrange /* "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" */,
    borderRadius: 0,
    border: 0,
    color: theme.palette.common.capresBlue,
    height: 48,
    padding: "0 30px",
    /* boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)", */
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.capresOrange,
      border: 0,
      boxShadow: "none",
    },
  },
  buttonLabel: {
    textTransform: "capitalize",
  },
}));

export default function NosotrosPage() {
  function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer mas";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
  }
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
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
                <Typography variant="h3">Acerca de</Typography>
              </Grid>
              <Grid item style={{ padding: "16px", marginBottom: "24px" }}>
                <Typography variant="body1">Capres</Typography>
                <p style={{ textAlign: "justify" }}>
                  La Caja de Ahorros y Previsión de los Empleados del Servicio
                  Nacional Integrado de Administración Aduanera y Tributaria
                  (SENIAT) “CAPRES”, es una asociación civil sin fines de lucro,
                  con personalidad jurídica y patrimonio propio. Su función
                  principal es la de fomentar el ahorro, garantizando a sus
                  asociados la satisfacción de necesidades de índole económico y
                  social.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Constituida según documento inscrito en la Oficina de Registro
                  Inmobiliario del Primer Circuito del Municipio Sucre del
                  Estado Miranda, en fecha 21 de agosto de 1995, bajo el N° 41,
                  Tomo 23 del Protocolo Primero, registrada ante la
                  Superintendencia de Cajas de Ahorro del Ministerio de Finanzas
                  bajo el N° 553, Sector Público.
                </p>
                <Typography variant="body1">Misión</Typography>
                <p style={{ textAlign: "justify" }}>
                  Satisfacer las necesidades socio económicas, recreacionales de
                  esparcimiento y demandas en general de todos los Asociados a
                  través de políticas acorde con sus necesidades y el
                  establecimiento de una relación transparente, confiable,
                  eficiente que garantice una adecuada administración de sus
                  ahorros y dedicada a satisfacer plenamente las demandas
                  financieras de los asociados bajo exigentes patrones de ética
                  y responsabilidad.
                </p>
                <Typography variant="body1">Visión</Typography>
                <p style={{ textAlign: "justify" }}>
                  Consolidar de manera progresiva los beneficios y planes a
                  favor de los asociados, mediante una administración honesta y
                  comprometida con los intereses colectivos de los asociados
                  coadyuvando en el mejoramiento e incremento del nivel de vida
                  de los socios.<span id="dots">..</span>
                </p>

                <div id="more" style={{ display: "none" }}>
                  <Typography variant="body1">Objeto</Typography>
                  <ul>
                    <li>
                      Fomentar el ahorro sistemático y estimular hábitos de
                      economía y previsión social entre sus asociados.
                    </li>
                    <li>
                      Conceder préstamos en dinero en efectivo, en beneficio
                      exclusivo de sus asociados, a un interés preferencial y
                      con facilidades de pago
                    </li>
                    <li>
                      Procurar para sus asociados otros beneficios
                      socioeconómicos tales como la ayuda mutua, el montepío, la
                      extensión de póliza.
                    </li>
                    <li>
                      Procurar el financiamiento para la adquisición,
                      remodelación o liberación de viviendas.
                    </li>
                    <li>
                      Procurar el financiamiento para la adquisición de
                      vehículos, a tal fin podrá celebrar contratos con las
                      empresas fabricantes o comercializadoras del ramo
                      específico.
                    </li>
                  </ul>
                  <p style={{ textAlign: "justify" }}>
                    La Asociación está dirigida y administrada por un Consejo de
                    Administración, siendo su órgano contralor el Consejo de
                    Vigilancia, a quien compete la responsabilidad de velar
                    porque se cumpla toda la normativa legal relacionada con las
                    actividades de la Asociación.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Las Asambleas Parciales de Asociados son la máxima autoridad
                    de la Asociación y sus acuerdos y resoluciones obligan a
                    todos los asociados, siempre y cuando se tomen de
                    conformidad con los Estatutos de la Asociación y la Ley de
                    Cajas de Ahorro, Fondos de Ahorro y Asociaciones de Ahorro
                    Similares.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Las Asambleas Parciales de Asociados, por regiones
                    administrativas, garantizan la participación directa de los
                    afiliados en la Asamblea General de Delegados. Deberán
                    reunirse ordinariamente una vez al año previamente a la
                    Asamblea General de Delegados, y extraordinariamente cuando
                    las circunstancias así lo requieran. Sus decisiones vinculan
                    al delegado ante la Asamblea General.
                  </p>
                  <Typography variant="body1">
                    Los beneficios más importantes que CAPRES brinda a sus
                    afiliados son:
                  </Typography>
                  <ul>
                    <li>Préstamos a Corto Plazo al 8 % de interés.</li>
                    <li>Préstamos a Mediano Plazo al 10 % de interés.</li>
                    <li>Préstamos a Largo Plazo al 12 % de interés.</li>
                    <li>
                      Préstamos con cargo al Fondo Especial para Programas al 14
                      % de interés.
                    </li>
                    <li>
                      Programas para la Adquisición, Remodelación de Vivienda
                      Principal.
                    </li>
                    <li>
                      Programas para la Liberación de Hipoteca de Vivienda
                      Principal.
                    </li>
                    <li>
                      Programas para la Adquisición de Vehículos, nuevos y
                      usados, para uso particular.
                    </li>
                    <li>Programas para el Rescate de Crédito Vehicular.</li>
                    <li>
                      Fondo de Ayuda Mutua, para asistir al afiliado en
                      programas de salud, y Fondo de Montepío para asistir al
                      afiliado por fallecimiento de sus descendientes y
                      ascendientes.
                    </li>
                  </ul>
                  <Typography variant="body1">
                    El funcionamiento y administración de CAPRES se regirá por:
                  </Typography>
                  <ul>
                    <li>
                      La Ley de Cajas de Ahorro, Fondos de Ahorro y Asociaciones
                      de Ahorro Similares y su reglamento.
                    </li>
                    <li>
                      Los Estatutos y Reglamentos internos de la Asociación.
                    </li>
                    <li>
                      Las decisiones de la Asambleas Parciales de Asociados y
                      General de Delegados, de los Consejos de Administración y
                      de Vigilancia.
                    </li>
                    <li>
                      Las resoluciones, opiniones y dictámenes de la
                      Superintendencia de Cajas de Ahorro.
                    </li>
                  </ul>
                  <Typography variant="body1">
                    El funcionamiento y administración de CAPRES se regirá por:
                  </Typography>
                  <ul>
                    <li>La Asamblea de Delegados.</li>
                    <li>Las Asambleas Parciales de Asociados.</li>
                    <li>El Consejo de Administración.</li>
                    <li>El Consejo de Vigilancia.</li>
                    <li>
                      Las Comisiones y los Comités que señale el Reglamento de
                      la Ley de Cajas de Ahorro, Fondos de Ahorro y Asociaciones
                      de Ahorro Similares.
                    </li>
                  </ul>
                </div>
                <Grid item>
                  <Button
                    classes={{
                      root: classes.buttonRoot,
                      label: classes.buttonLabel,
                    }}
                    id="myBtn"
                    onClick={myFunction}
                  >
                    LEER MAS
                  </Button>
                </Grid>
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
