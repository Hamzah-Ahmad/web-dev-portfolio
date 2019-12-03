import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Row,
  Col
} from "reactstrap";
import BlogApp from "../images/BlogApp.png";
import HeavensView from "../images/HeavensView.jpg";
import ReactApp from "../images/ReactApp.png";
import MernToDoApp from "../images/MernToDoApp.png";
import Zayin from "../images/Zayin.png";
import ShoppingCart from "../images/ShoppingCart.png";

const Projects = () => {
  return (
    <div>
      <div id="section">
        <Container>
          <div>
            <h2 className="project-title">PROJECTS</h2>
            <hr />
            <Row>
              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg top width="100%" src={Zayin} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="project-header">
                      Zayin <small>(Discussion Forum)</small>
                    </CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/zayin"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://zayin.herokuapp.com/"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">Node</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">MongoDB</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">React</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Redux</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">JWT Auth</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Reactstrap</small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg
                    top
                    width="100%"
                    src={ShoppingCart}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="project-header">
                      React Shopping Cart
                    </CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/react-cart"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://react-shop-cart.herokuapp.com/"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">React</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Redux</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Reactstrap</small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg
                    top
                    width="100%"
                    src={ReactApp}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="project-header">
                      React Recipe App
                    </CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/react-recipe-app"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://salty-plains-93422.herokuapp.com/"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">Node</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">MongoDB</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Bootstrap</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">React</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Axios</small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg
                    top
                    width="100%"
                    src={MernToDoApp}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="project-header">
                      MERN To-Do App
                    </CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/mern-todo-app"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://stark-oasis-18480.herokuapp.com/"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">Node</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">MongoDB</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Bootstrap</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">React</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Firebase Auth</small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg
                    top
                    width="100%"
                    src={BlogApp}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="project-header">Blog App</CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/blog-app"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://blog-si.herokuapp.com/blogs"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">Node</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">MongoDB</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">Bootstrap</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">PassportJS</small>
                      </Col>
                      <Col xs="5">
                        <small className="tech-used-icon">EJS Template</small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className="project-col" lg="4">
                <Card id="project-card" className="h-100">
                  <CardImg
                    top
                    width="100%"
                    src={HeavensView}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="project-header">
                      Heavens's View
                    </CardTitle>
                    <a
                      className="project-icon"
                      href="https://github.com/Hamzah-Ahmad/heavens-view-materialize-project"
                      target="_blank"
                    >
                      <i className="devicon-github-plain"></i>
                    </a>
                    <a
                      className="project-icon"
                      href="https://hamzah-ahmad.github.io/heavens-view-materialize-project/"
                      target="_blank"
                    >
                      <i className="fa fa-globe"></i>
                    </a>
                    <CardText className="tech-used">
                      Technologies Used:
                    </CardText>
                    <Row>
                      <Col xs="5">
                        <small className="tech-used-icon">
                          Materialize CSS
                        </small>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
