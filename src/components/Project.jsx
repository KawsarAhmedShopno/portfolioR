import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Project extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
          <div className="bottom"></div>
          <Row>
            {" "}
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2022/04/E-commerce-App-JPG-File-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title className="serviceName">Paribibi.com</Card.Title>
                  <Card.Text className="serviceDescription">
                    Ecommerce is one way people buy and sell things in retail.
                    Some companies sell products online only, while other
                    sellers use ecommerce as a part of a broader strategy that
                    includes physical stores and other distribution channels.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://desktrack.timentask.com/blog/wp-content/uploads/2022/07/b-1-740x430-2.jpeg"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Employee Management System
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    An employee management system is used to manage the work
                    process and organizational responsibilities of human
                    resources and other departments. It helps managers and
                    employees to work together and efficiently utilize the
                    working hours for better business growth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg"
                />
                <Card.Body>
                  <Card.Title className="serviceName">e learn</Card.Title>
                  <Card.Text className="serviceDescription">
                    A learning system based on formalised teaching but with the
                    help of electronic resources is known as E-learning.It is a
                    learning environment which uses information .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} >
              <Card className="projectmore" >
                <a
                  href="https://github.com/kawsarahmedshopno"
                  className="btn btn-black f-right"
                >
                  More
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Project;
