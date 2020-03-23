import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Landing from './Landing';
import './bootstrap-social.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">    
      <header className="App-header">
      <nav class="navbar navbar-expand-lg navbar-light home-navbar">
        <a class="navbar-brand" href="/"> <strong>Dhwan Shah</strong></a>
        <div class="collapse navbar-collapse navbar-items" id="navbarNavAltMarkup">
          <div class="navbar-nav navbar-items">
            <a class="nav-item nav-link navbar-individual" href="home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link navbar-individual" href="about">About</a>
            <a class="nav-item nav-link navbar-individual" href="projects">Projects</a>
            <a class="nav-item nav-link navbar-individual" href="experience">Experience</a>
          </div>
        </div>
      </nav>
      </header>
      <div class="body">
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
      </div>

      <footer class="footer navbar-fixed-bottom">
        <div>
          CONNECT
          <div class="social-icons">
                    <a href="https://www.linkedin.com/in/dhwanshah21/" class="btn btn-primary btn-social btn-linkedin">
                    <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/dhwanshah21/" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i></a>
                    <a href="https://mailto:shahdhwan@gmail.com" class="btn btn-primary btn-social btn-google">
                    <i class="fas fa-envelope-square"></i>
                    </a>
        </div>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
