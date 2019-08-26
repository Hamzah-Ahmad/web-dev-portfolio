import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <div id="section">
      <Container>
        <div>
          <h2 className="contact-title">CONTACT ME</h2>
          <hr />
          <Row style={{ marginTop: "70px" }}>
            <Col lg="1">
              <i class="fa fa-phone contact-icon"></i>
            </Col>
            <Col lg="11">
              <h4 className="contact-header">Phone</h4>
              <h5>(832)-732-3819</h5>
            </Col>
          </Row>
          <Row style={{ marginTop: "70px" }}>
            <Col lg="1">
              <i class="material-icons contact-icon">email</i>
            </Col>
            <Col lg="11">
              <h4 className="contact-header">E-Mail</h4>
              <h5>ahmadhamzah500@gmail.com</h5>
            </Col>
          </Row>
          <Row style={{ marginTop: "70px" }}>
            <Col lg="1">
              <i class="devicon-github-plain contact-icon"></i>
            </Col>
            <Col lg="11">
              <h4 className="contact-header">Github Profile</h4>
              <a
                className="btn btn-secondary"
                href="https://github.com/Hamzah-Ahmad"
                target="_blank"
                style={{ color: "white" }}
              >
                View Github
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
