import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MyContextProvider from "../contexts/MyContext";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPageMain from "./pages/LoginPage/LoginPageMain";
import RegistroPage from "./pages/RegistroPage/RegistroPage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";

function example() {
  const [selectedIndex, setSelectedIndex] = useSt();
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <CssBaseline />
      <MyContextProvider>
        <ThemeProvider theme={theme}>
          <>
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

              <Route path="/login">
                <LoginPageMain />
              </Route>
              <Route path="/registro">
                <RegistroPage />
              </Route>
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
            </Switch>
            <Footer
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </>
        </ThemeProvider>
      </MyContextProvider>
    </React.Fragment>
  );
}

export default example;
