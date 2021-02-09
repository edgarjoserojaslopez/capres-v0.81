import { createMuiTheme } from "@material-ui/core/styles";

const capresBlue = "#0B72B9";
const capresOrange = "#F8CD4D";
const capresGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      capresBlue: `${capresBlue}`,
      capresOrange: `${capresOrange}`,
    },
    primary: {
      main: `${capresBlue}`,
    },
    secondary: {
      main: `${capresOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    login: {
      fontWeight: "600",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${capresBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${capresGrey}`,
    },
  },
});
