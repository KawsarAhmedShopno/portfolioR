import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Pagetop from "../components/Pagetop";

class Servicepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pagetop pagetitle="My Service" />
        <Service />
        <Footer />
      </Fragment>
    );
  }
}

export default Servicepage;
