import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Pagetop from "../components/Pagetop";

class Portfoliopage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pagetop pagetitle="Portfolio" />
        <Portfolio />
        <Footer />
      </Fragment>
    );
  }
}

export default Portfoliopage;
