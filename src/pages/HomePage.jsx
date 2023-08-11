import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Introduction from "../components/Introduction";
import Service from "../components/Service";
import Analysis from "../components/Analysis";
import Portfolio from "../components/Portfolio";
import Introcontact from "../components/Introcontact";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Introduction />
        <Service />
        <Analysis />
        <Portfolio />
        <Project />
        <Introcontact />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
