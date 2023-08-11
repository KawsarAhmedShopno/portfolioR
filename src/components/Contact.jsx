import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export class Contact extends Component {
  sendContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let data = { name: name, email: email, message: message };
  }

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>

              <Form>
                <Form.Group>
                  <Form.Label>Your Name </Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Your Email </Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Enter Your email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message </Form.Label>
                  <Form.Control id="message" as="textarea" rows={3} />
                </Form.Group>

                <Button onClick={this.sendContact} variant="primary">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>
              <p className="serviceDescription">
                <br></br>
                Email :kahmed6911@gmail.com
                <br></br>
                Phone : 01304740950
                <br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
