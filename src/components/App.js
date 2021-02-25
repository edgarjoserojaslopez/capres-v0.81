import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import NosotrosPage from "./pages/NosotrosPage/NosotrosPage";
import HistoriaPage from "./pages/NosotrosPage/HistoriaPage";
import EstructuraPage from "./pages/NosotrosPage/EstructuraPage";
import JuntaPage from "./pages/NosotrosPage/JuntaPage";
import OrganizacionPage from "./pages/NosotrosPage/HistoriaPage";
import SociosPage from "./pages/SociosPage/SociosPage";
import ContactoPage from "./pages/ContactoPage/ContactoPage";

import ServicesPage from "./pages/Services/ServicesPage";
import HaberesPage from "./pages/Services/HaberesPage";
import PrestamosPage from "./pages/Services/PrestamosPage.js";
import ViviendaPage from "./pages/Services/ViviendaPage";
import VehiculosPage from "./pages/Services/VehiculosPage";
import FepPage from "./pages/Services/FepPage";

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
            <Route path="/nosotros" component={NosotrosPage} />
            <Route path="/historia" component={HistoriaPage} />
            <Route path="/estructura" component={EstructuraPage} />
            <Route path="/junta" component={JuntaPage} />
            <Route path="/organizacion" component={OrganizacionPage} />
            <Route path="/servicios" component={ServicesPage} />
            <Route path="/haberes" component={HaberesPage} />
            <Route path="/prestamos" component={PrestamosPage} />
            <Route path="/vivienda" component={ViviendaPage} />
            <Route path="/vehiculos" component={VehiculosPage} />
            <Route path="/fondo" component={FepPage} />
            <Route path="/socios" component={SociosPage} />
            <Route path="/contacto" component={ContactoPage} />
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
