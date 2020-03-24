import React from 'react';
import './About.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './images/icons/react-1.svg';
import angularLogo from './images/icons/angular-icon.svg';
import javascript from './images/icons/javascript.svg';
import typescript from './images/icons/typescript.svg';
import bootstrap from './images/icons/bootstrap-4.svg';
import html from './images/icons/html5.svg';
import css from './images/icons/css3.svg';
import mysql from './images/icons/mysql.svg';
import mongodb from './images/icons/mongodb.svg';
import aws from './images/icons/aws-2.svg';
import nodejs from './images/icons/nodejs-1.svg';
import sass from './images/icons/sass-1.svg';
import gcp from './images/icons/google-cloud-1.svg';
import docker from './images/icons/docker.svg';
import github from './images/icons/github-1.svg';
import vscode from './images/icons/vscode.svg';
function About () {
    return (
        <div class="container about-content">
            <div class="row">
            <div class="col-md-6 skills-description">
            <h2> My Skills</h2>
            <div class="row skills-tech-icons">
              <img src={reactLogo} />
              <img src={angularLogo} />
              <img src={javascript} />
              <img src={typescript} />
              <img src={nodejs} />
              <img src={bootstrap} />
              <img src={html} />
              <img src={sass} />
              <img src={css} />
              <img src={mysql} />
              <img src={mongodb} />
              <img src={docker} />
              <img src={aws} />
              <img src={gcp} />
              <img src={github} />
              <img src={vscode} />
            </div>
            </div>
           <div class="col-md-6 about-description">
                <h2> My Story</h2>
                <p>
                <b>Seeking a Full-Time Software Engineer Opportunity</b>
                </p>
                <p>
                I am a performance driven and skillful engineer with good academic record looking for a challenging software development opportunity to advance the career.
                In addition to the Master’s degree in Computer Science, and 1 year of hands-on experience in web development, I am confident that I will be an asset to any organization.                    
                </p>
                <p>
                I enjoy being challenged and working on projects that require me to work outside my comfort zone. 
                Problem solving is a challenging situation which I have always loved to be in. 
                And during this journey I have acquired software development skills and I 
                always look forward to learn new technologies which can be a huge learning curve for my career.               
                </p>
                <p>
                If not in front of the laptops or desktops, I love to play different outdoor sports like soccer, volleyball and badminton.
                I love to travel and also do some potential work contributing to the community.                   
                </p>
                <button type="button" class="btn btn-outline-warning btn-lg">
                <a href="/projects">Check Out Projects</a>
                </button>
           </div>
           </div>
        </div>
    )
}

export default About;