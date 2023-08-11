import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-area">
            <div className="container">
              <div className="footer-top footer-padding10">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="footer-top-cap text-center">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                      <span>
                        <a href="#">kahmed6911@gmail.com Phone:01304740950</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-xl-9 col-lg-1">
                    <div className="footer-copy-right">
                      <p>
                        Copyright &copy;
                        <script>
                          document.write(new Date().getFullYear());
                        </script>{" "}
                        All rights reserved{" "}
                        <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                    <a>Stay Connected</a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
