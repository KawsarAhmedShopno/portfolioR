import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Pagetop from "../components/Pagetop";
class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Pagetop pagetitle="About" />
        <About />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
