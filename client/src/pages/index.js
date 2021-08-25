import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import HeadLines from "./headlines";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <HeadLines path="/" />
    </Router>
  );
}
