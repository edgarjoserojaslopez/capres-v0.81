import React from "react";

import { CssBaseline } from "@material-ui/core";

import HeroBlock from "./HeroBlock";
import ServicesBlock from "./ServicesBlock";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <HeroBlock />
      <ServicesBlock />
    </>
  );
}
