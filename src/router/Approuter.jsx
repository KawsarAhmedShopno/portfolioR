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
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="/portfolio" element={<Portfoliopage />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    );
  }
}
