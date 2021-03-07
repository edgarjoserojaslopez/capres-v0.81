import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/* //Auth consts
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; */

/* import MyContextProvider from "./contexts/MyContext"; */

import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
