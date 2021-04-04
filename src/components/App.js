import React, { useState } from "react";
import "./App.css";
//Auth imports
/* import { useContext } from "react"; */
/* import  MyContext  from "../contexts/MyContext"; */

//Site imports
import { Box, CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
/* import LoginWindow from "./pages/LoginPage/LoginWindow"; */

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

// Auth pages
/* import LoginPageMain from "./pages/LoginPage/LoginPageMain"; */
import Login from "./pages/LoginPage/Login";
/* import RegistroPage from "./pages/RegistroPage/RegistroPage"; */
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Register from "./pages/RegistroPage/Register";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
/* import ProtectedRoutes from "./routes/ProtectedRoutes"; */

//importing the ContextProvider
import MyContextProvider from "../contexts/MyContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [value, setValue] = useState();
  /* //Auth consts
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; */

  return (
    <React.Fragment>
      <CssBaseline />
      <>
        <ThemeProvider theme={theme}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
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

              <Route exact path="/nosotros">
                <NosotrosPage />
              </Route>

              <Route exact path="/servicios">
                <ServicesPage />
              </Route>
              <Route exact path="/haberes">
                <HaberesPage />
              </Route>
              <Route exact path="/prestamos">
                <PrestamosPage />
              </Route>
              <Route exact path="/vivienda">
                <ViviendaPage />
              </Route>
              <Route exact path="/vehiculos">
                <VehiculosPage />
              </Route>
              <Route exact path="/fondo">
                <FepPage />
              </Route>
              <Route exact path="/socios">
                <SociosPage />
              </Route>
              <Route exact path="/delegados">
                <DelegadosPage />
              </Route>
              <Route exact path="/contacto">
                <ContactoPage />
              </Route>
              <Route exact path="/login">
                <Login />
                {/* <LoginPageMain /> */}
                {/* <LoginWindow /> */}
              </Route>
              <Route exact path="/registro">
                <Register />
                {/* <RegistroPage /> */}
              </Route>
              <Route exact path="/historia">
                <HistoriaPage />
              </Route>
              <Route exact path="/estructura">
                <EstructuraPage />
              </Route>
              <Route exact path="/junta">
                <JuntaPage />
              </Route>
              <Route exact path="/organizacion">
                <OrganizacionPage />
              </Route>
              <Route exact path="/auth">
                <DashboardPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
            </Switch>

            <Footer
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </Box>
        </ThemeProvider>
      </>
    </React.Fragment>
  );
}

export default App;
