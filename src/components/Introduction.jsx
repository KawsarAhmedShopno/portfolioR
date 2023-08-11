import React, { Component } from "react";
import { Link } from "react-router-dom";

class Introduction extends Component {
  render() {
    return (
      <div class="slider-area ">
        <div class="slider-active">
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-8">
                  <div class="hero__caption">
                    <h1 data-animation="fadeInUp" data-delay=".6s">
                      This is A Full Stack Developer
                      <br />
                      Kawsar Ahmed
                    </h1>

                    <div class="hero__btn">
                      <Link
                        to="/about"
                        class="btn hero-btn"
                        data-animation="fadeInLeft"
                        data-delay=".8s"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        class="btn border-btn ml-15"
                        data-animation="fadeInRight"
                        data-delay="1.0s"
                      >
                        Hire Me
                      </Link>
                    </div>
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

export default Introduction;
