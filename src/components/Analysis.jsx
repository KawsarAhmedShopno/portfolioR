import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Techonology: "PHP", Projects: 100 },
        { Techonology: "MySqli", Projects: 90 },
        { Techonology: "Laravel", Projects: 100 },
        { Techonology: "React", Projects: 85 },

        { Techonology: "Vue Js", Projects: 50 },
        { Techonology: "Django", Projects: 50 },
        { Techonology: "JavaScript", Projects: 80 },
      ],
    };
  }

  render() {
    var blue = "#051b35";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col
              style={{ width: "100%", height: "300px" }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                A full stack developer requires skills such as Front-end
                Languages and Frameworks (HTML, CSS, JavaScript), Backend
                Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask,
                C++), Database Management Systems (MySQL, SQL SERVER and
                PostgreSQL, MongoDB, and Oracle Database), Version Control, and
                Web Hosting Platforms.Full-stack technology refers to the entire
                depth of a computer system application, and full stack web
                developers are those who are capable of developing both the
                front end and the back end of web development. All of the
                features that are visible to the client, or the viewer of the
                site, are included in the front end. Programming a browser (By
                using JavaScript, jQuery, Angular, or Vue) Programming a server
                (By using PHP, ASP, Python, or Node)
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Analysis;
