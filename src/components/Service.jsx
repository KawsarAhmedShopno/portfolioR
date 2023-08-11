import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div>
        <section class="categories-area section-padding10">
          <div class="container ">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-tittle mb-10">
                  <h2>What Services you will Get from me!</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-pen"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">Front-end development</a>
                    </h5>
                    <p>
                      A Front-End Developer is someone who creates websites and
                      web applications. The difference between Front-End and
                      Back-End is that Front-End refers to how a web page looks,
                      while back-end refers to how it works. You can think of
                      Front-End as client-side and Back-End as server-side.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-speaker"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">Database development</a>
                    </h5>
                    <p>
                      Full-stack developers may help create servers and
                      databases to support the back-end of the software. You may
                      be part of the team that ensures the database's
                      maintenance, security and scalability.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-portfolio"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">Backend Development</a>
                    </h5>
                    <p>
                      Back-end development means working on server-side
                      software, which focuses on everything you can’t see on a
                      website. Back-end developers ensure the website performs
                      correctly, focusing on databases, back-end logic,
                      application programming interface (APIs), architecture,
                      and servers.We use Laravel framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Service;
