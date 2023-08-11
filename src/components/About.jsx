import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="about-me ">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="about-me-img mb-30">
                    <img src="assets/img/hero.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="about-me-caption">
                    <h2>I Create Products Not Just Art.</h2>
                    <p className="pb-30">
                      I’m a Full Stack Web developer who is passionate about
                      making error-free websites with 100% client satisfaction.
                      I have a passion for learning and sharing my knowledge
                      with others as publicly as possible. I pride myself on
                      doing quality work and maintain excellent communication.
                      Most of the time I work with Laravel but some technologies
                      I enjoy working with include ReactJS, JavaScript as well
                      as PHP.
                    </p>
                    <h5>I am Full Stack Web Developer</h5>
                    <p>
                      <h3>Skill</h3> <br></br>✅ Laravel<br></br>✅ ReactJs{" "}
                      <br></br>✅ PHP <br></br>✅ HTML5 / CSS3 / SASS /
                      Bootstrap<br></br> ✅ JavaScript -<br></br> 👨‍💻 All of my
                      projects are available at
                      [https://kawsarahmedshopno.github.io/my-portfolio/]{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact-info-area w-padding bg-info"
            data-background="assets/img/gallery/section_bg04.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7">
                  <div className="contact-caption ">
                    <h3>If Not Now, When? Let’s Work Together!</h3>
                    <p>
                      I love to solve real-world problems. I am strategic,
                      goal-oriented, and always work with an end goal in mind.
                      Over the past years, I created lots of websites for my
                      clients.
                    </p>
                    <img src="assets/img/gallery/sin.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="wantToWork-area w-padding2">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-8 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>Dont worry for contact i`m available</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <a
                    href="/portfolioR/contact"
                    className="btn btn-black f-right"
                  >
                    Contact Me Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
