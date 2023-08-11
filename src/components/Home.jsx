import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "./About";

class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <section class="categories-area section-padding10">
            <div class="container">
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
                        <a href="services.html">Frontend Development</a>
                      </h5>
                      <p>
                        Front-end web development, also known as client-side
                        development is the practice of producing HTML, CSS and
                        JavaScript for a website or Web Application so that a
                        user can see and interact with them directly.we use
                        ReactJs
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
                        databases to support the back-end of the software. You
                        may be part of the team that ensures the database's
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
          <section class="client-comments section-paddingt10">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-10">
                  <div class="section-tittle mb-10">
                    <h2>Some Project</h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="latest-blog-area">
              <div class="container">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="blog-wrapper">
                      <div class="blog-inner">
                        <div class="blog-top">
                          <div class="person-img">
                            <img src="assets/img/gallery/blog1.png" alt="" />
                          </div>
                          <div class="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="blog-wrapper">
                      <div class="blog-inner">
                        <div class="blog-top">
                          <div class="person-img">
                            <img src="assets/img/gallery/blog2.png" alt="" />
                          </div>
                          <div class="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="blog-wrapper">
                      <div class="blog-inner">
                        <div class="blog-top">
                          <div class="person-img">
                            <img src="assets/img/gallery/blog3.png" alt="" />
                          </div>
                          <div class="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor
                          incididunt utore etstes dolore magna aliqua. Ut
                          imminim restai veniam, quis nostrud.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="services-area  services-padding20">
            <div class="container">
              <div class="project-heading mb-10">
                <div class="row align-items-end">
                  <div class="col-lg-6">
                    <div class="section-tittle">
                      <h2>What Services you will Get from me!</h2>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="properties__button">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <a
                            class="nav-item nav-link active"
                            id="nav-home-tab"
                            data-toggle="tab"
                            href="#nav-home"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="false"
                          >
                            {" "}
                            All
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-profile-tab"
                            data-toggle="tab"
                            href="#nav-profile"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            {" "}
                            Web
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#nav-contact"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Development
                          </a>
                          <a
                            class="nav-item nav-link"
                            id="nav-last-tab"
                            data-toggle="tab"
                            href="#nav-last"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Web Design
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="tab-content active" id="nav-tabContent">
                    <div
                      class="tab-pane fade active show"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="services-caption">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services4.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services5.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services6.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="services-caption">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services6.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services4.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services5.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="services-caption">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services2.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services1.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services4.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services5.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services6.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div class="services-caption">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services4.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services5.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services6.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div class="services-caption">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services3.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="single-services mb-30">
                                  <img
                                    src="assets/img/service/services1.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services4.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services5.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="single-services mb-30">
                              <img
                                src="assets/img/service/services6.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="wantToWork-area w-padding2">
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-xl-6 col-lg-8 col-md-8">
                  <div class="wantToWork-caption wantToWork-caption2">
                    <h2>Dont worry for contact i`m available</h2>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3">
                  <a href="#" class="btn btn-black f-right">
                    Contact Me Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            class="contact-info-area w-padding2 bg-info"
            data-background="assets/img/gallery/section_bg04.jpg"
          >
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-xl-5 col-lg-7">
                  <div class="contact-caption mb-50">
                    <h3>If Not Now, When? Let’s Work Together!</h3>
                    <p>
                      I’m a Full Stack Web developer who is passionate about
                      making error-free websites with 100% client satisfaction.
                      I love to solve real-world problems. I am strategic,
                      goal-oriented, and always work with an end goal in mind.
                      Over the past years, I created lots of websites for my
                      clients. Most of the time I work with Laravel but some
                      technologies I enjoy working with include ReactJS,
                      JavaScript as well as PHP.
                    </p>
                    <img src="assets/img/gallery/sin.png" alt="" />
                  </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                  <form action="#" class="contact-wrapper">
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                    <button class="submit-btn2" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
