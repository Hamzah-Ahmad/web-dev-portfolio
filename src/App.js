import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavbarComp';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route path = '/projects' component = {Projects}/>
        <Route path = '/contact' component = {Contact}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;





