import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Container} from 'reactstrap';

const LandingPage = () => {
    // useEffect(document.body.classList.add('background-red'), []);
    return (
        <div id = 'section'>
            <Helmet>
                <style>{'body { background: #bdc3c7; background: -webkit-linear-gradient(to right, #bdc3c7, #2c3e50); background: linear-gradient(to right, #bdc3c7, #2c3e50); }'}</style>
            </Helmet>
            <Container>
                <div id = 'main-header' >
                    <h1  id = 'main-title'>Hamzah Ahmad</h1>
                    <h3  id = 'sec-title'>Junior Full Stack Web Developer</h3>
                    <div id = 'icons'>
                        <i class="devicon-html5-plain dev-icon "></i>
                        <i class="devicon-css3-plain dev-icon "></i>
                        <i class="devicon-javascript-plain dev-icon "></i>
                        <i class="devicon-react-original dev-icon "></i>
                        <i class="devicon-nodejs-plain dev-icon "></i>
                        <i class="devicon-mongodb-plain dev-icon "></i>
                        <i class="devicon-php-plain dev-icon "></i>
                        <i class="devicon-mysql-plain dev-icon "></i> 
                    </div>    
                </div>
            </Container>
        </div>
        
    )
}

export default LandingPage
