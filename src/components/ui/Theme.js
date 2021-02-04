import { createMuiTheme } from "@material-ui/core/styles";

const capresBlue = "#0B72B9";
const capresOrange = "#F8CD4D";

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
  },
});
