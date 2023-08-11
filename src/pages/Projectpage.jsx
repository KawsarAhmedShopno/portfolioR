import React, { Component, Fragment } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagetop from "../components/Pagetop";
import Project from "../components/Project";
class Projectpage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pagetop pagetitle="Project" />
        <Project />
        <Footer />
      </Fragment>
    );
  }
}

export default Projectpage;
