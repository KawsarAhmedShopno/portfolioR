import React, { Component, Fragment } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagetop from "../components/Pagetop";
class Contactpage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pagetop pagetitle="Contact" />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Contactpage;
