import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";

import Footer from "./ui/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import NosotrosPage from "./pages/NosotrosPage/NosotrosPage";
import HistoriaPage from "./pages/NosotrosPage/HistoriaPage";
import EstructuraPage from "./pages/NosotrosPage/EstructuraPage";
import JuntaPage from "./pages/NosotrosPage/JuntaPage";
import OrganizacionPage from "./pages/NosotrosPage/OrganizacionPage";
import SociosPage from "./pages/SociosPage/SociosPage";
import ContactoPage from "./pages/ContactoPage/ContactoPage";

import ServicesPage from "./pages/Services/ServicesPage";
import HaberesPage from "./pages/Services/HaberesPage";
import PrestamosPage from "./pages/Services/PrestamosPage.js";
import ViviendaPage from "./pages/Services/ViviendaPage";
import VehiculosPage from "./pages/Services/VehiculosPage";
import FepPage from "./pages/Services/FepPage";
import DelegadosPage from "./pages/DelegadosPage/DelegadosPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistroPage from "./pages/RegistroPage/RegistroPage";
function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [value, setValue] = useState();

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
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/nosotros">
              <NosotrosPage />
            </Route>

            <Route path="/servicios">
              <ServicesPage />
            </Route>
            <Route path="/haberes">
              <HaberesPage />
            </Route>
            <Route path="/prestamos">
              <PrestamosPage />
            </Route>
            <Route path="/vivienda">
              <ViviendaPage />
            </Route>
            <Route path="/vehiculos">
              <VehiculosPage />
            </Route>
            <Route path="/fondo">
              <FepPage />
            </Route>
            <Route path="/socios">
              <SociosPage />
            </Route>
            <Route path="/delegados">
              <DelegadosPage />
            </Route>
            <Route path="/contacto">
              <ContactoPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/registro">
              <RegistroPage />
            </Route>
            <Route path="/historia">
              <HistoriaPage />
            </Route>
            <Route path="/estructura">
              <EstructuraPage />
            </Route>
            <Route path="/junta">
              <JuntaPage />
            </Route>
            <Route path="/organizacion">
              <OrganizacionPage />
            </Route>
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
