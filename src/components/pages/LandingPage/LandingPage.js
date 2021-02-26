import React from "react";

import { CssBaseline } from "@material-ui/core";

import HeroBlock from "./HeroBlock";
import ServicesBlock from "./ServicesBlock";
import CardsBlock from "./CardsBlock";
import InformationBlock from "./InformationBlock";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  overflowLanding: {
    overflowX: "hidden !important",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.overflowLanding}>
      {/* <CssBaseline /> */}
      <HeroBlock />
      <ServicesBlock />
      <CardsBlock />
      <InformationBlock />
    </div>
  );
}
