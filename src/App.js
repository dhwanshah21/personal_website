import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light home-navbar">
        <a class="navbar-brand" href="/home"> <strong>Dhwan Shah</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-items" id="navbarNavAltMarkup">
          <div class="navbar-nav navbar-items">
            <a class="nav-item nav-link active navbar-individual" href="/home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link navbar-individual" href="projects">Projects</a>
            <a class="nav-item nav-link navbar-individual" href="about">About</a>
            <a class="nav-item nav-link navbar-individual" href="skills">Skills</a>
          </div>
        </div>
      </nav>
        <Route path="/home" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
