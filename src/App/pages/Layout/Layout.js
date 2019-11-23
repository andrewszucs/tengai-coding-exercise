import { CssBaseline } from "@material-ui/core";
import Header from "../../components/Header";
import React from "react";

function Layout(props) {
  return (
    <>
      <CssBaseline />
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
