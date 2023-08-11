import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Servicepage from "../pages/Servicepage";
import Portfoliopage from "../pages/Portfoliopage";
import Projectpage from "../pages/Projectpage";
import Aboutpage from "../pages/AboutPage";
import Homepage from "../pages/HomePage";
import Contactpage from "../pages/Contactpage";
export default class Approuter extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/portfolioR" element={<Homepage />} />
          <Route path="/portfolioR/about" element={<Aboutpage />} />
          <Route path="/portfolioR/service" element={<Servicepage />} />
          <Route path="/portfolioR/portfolio" element={<Portfoliopage />} />
          <Route path="/portfolioR/project" element={<Projectpage />} />
          <Route path="/portfolioR/contact" element={<Contactpage />} />
        </Routes>
      </div>
    );
  }
}
