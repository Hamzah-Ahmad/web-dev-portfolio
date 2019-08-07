import React from 'react';
import {Container, Card, CardBody, CardTitle, CardText, CardImg, Button, Row, Col} from 'reactstrap';
import BlogApp from '../images/BlogApp.png';
import HeavensView from '../images/HeavensView.jpg';

const Projects = () => {
    return (
        <div>
            <div id = 'section'>
                <Container>
                    <div>
                        <h2 className = 'project-title'>PROJECTS</h2> 
                        <hr/>
                        <Row>
                            <Col className = 'project-col' lg = '4'>
                                <Card id = 'project-card' className = 'h-100'>
                                <CardImg top width="100%" src={BlogApp} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className = 'project-header'>
                                            Blog App
                                        </CardTitle>
                                        <a className = 'project-icon' href = '#'><i className="devicon-github-plain"></i></a>
                                        <a className = 'project-icon' href = '#'><i className="fa fa-globe"></i></a>
                                        <CardText className = 'tech-used'>Technologies Used:</CardText>
                                        <Row>
                                            <Col xs = '5'><small>Node</small></Col>
                                            <Col xs = '5'><small>MongoDB</small></Col>
                                            <Col xs = '5'><small>Bootstrap</small></Col>
                                            <Col xs = '5'><small>PassportJS</small></Col>
                                            <Col xs = '5'><small>EJS Template</small></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = 'project-col' lg = '4'>
                                <Card id = 'project-card' className = 'h-100'>
                                <CardImg top width="100%" src={BlogApp} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className = 'project-header'>
                                            React Recipe App
                                        </CardTitle>
                                            <a className = 'project-icon' href = '#'><i className="devicon-github-plain"></i></a>
                                            <a className = 'project-icon' href = '#'><i className="fa fa-globe"></i></a>
                                        <CardText className = 'tech-used'>Technologies Used:</CardText>
                                        <Row>
                                            <Col xs = '5'><small>Node</small></Col>
                                            <Col xs = '5'><small>MongoDB</small></Col>
                                            <Col xs = '5'><small>Bootstrap</small></Col>
                                            <Col xs = '5'><small>React</small></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = 'project-col' lg = '4'>
                                <Card id = 'project-card' className = 'h-100'>
                                <CardImg top width="100%" src={BlogApp} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className = 'project-header'>
                                            MERN To-Do App
                                        </CardTitle>
                                            <a className = 'project-icon' href = '#'><i className="devicon-github-plain"></i></a>
                                            <a className = 'project-icon' href = '#'><i className="fa fa-globe"></i></a>
                                        <CardText className = 'tech-used'>Technologies Used:</CardText>
                                        <Row>
                                            <Col xs = '5'><small>Node</small></Col>
                                            <Col xs = '5'><small>MongoDB</small></Col>
                                            <Col xs = '5'><small>Bootstrap</small></Col>
                                            <Col xs = '5'><small>React</small></Col>
                                            <Col xs = '5'><small>Firebase Auth</small></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className = 'project-col' lg = '4'>
                                <Card id = 'project-card' className = 'h-100'>
                                <CardImg top width="100%" src={HeavensView} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className = 'project-header'>
                                            Heavens's View
                                        </CardTitle>
                                            <a className = 'project-icon' href = '#'><i className="devicon-github-plain"></i></a>
                                            <a className = 'project-icon' href = '#'><i className="fa fa-globe"></i></a>
                                        <CardText className = 'tech-used'>Technologies Used:</CardText>
                                        <Row>
                                            <Col xs = '5'><small>Materialize CSS</small></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Projects
