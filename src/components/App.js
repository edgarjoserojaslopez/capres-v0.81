import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/nosotros" component={() => <div>Nosotros</div>} />
            <Route path="/servicios" component={() => <div>Servicios</div>} />
            <Route
              path="/retiros"
              component={() => <div>Retiro de Haberes</div>}
            />
            <Route
              path="/prestamos"
              component={() => <div>Préstamos Personales</div>}
            />
            <Route
              path="/vivienda"
              component={() => <div>Préstamos de Vivienda</div>}
            />
            <Route
              path="/vehiculos"
              component={() => <div>Préstamos de Vehículos</div>}
            />
            <Route
              path="/fondo"
              component={() => <div>Fondo Especial para Programas (FEP)</div>}
            />
            <Route path="/socios" component={() => <div>Socios</div>} />
            <Route path="/contacto" component={() => <div>Contacto</div>} />
            <Route path="/login" component={() => <div>Login</div>} />
            <Route path="/registro" component={() => <div>Registro</div>} />

            <Route path="/dashboard" component={() => <div>Dashboard</div>} />
          </Switch>
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
