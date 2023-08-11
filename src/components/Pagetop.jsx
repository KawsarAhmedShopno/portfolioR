import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagetop extends Component {
  render() {
    return (
      <div>
        <div class="slider-area ">
          <div class="slider-height2 d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hero-cap">
                    <h2>{this.props.pagetitle}</h2>
                    <nav aria-label="breadcrumb ">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="/">{this.props.pagetitle}</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagetop;
