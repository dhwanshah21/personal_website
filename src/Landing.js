import React from 'react';
import './Landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './images/BackgroundImage.jpg';
import resume from './images/Dhwan_Shah_Resume.pdf';

function Landing () {
    return (
        <div class="container landing-content">
          <div class="row">
            <div class="card stack-top bg-dark text-white">
            <img src={bg} class="card-img" alt="img" />
            <div class="card-img-overlay">
              <h5 class="card-title landing-card-text">I AM THE CSS &#123;...&#125; TO YOUR HTML &lt;&#47;&gt;</h5>
            </div>
            </div>
          </div>
          <div class="row landing-page-button">
              <a href="/home">
              <button type="button" class="btn btn-warning">    
              render(Website)
              </button>
              </a>
              <a href={resume} download="Dhwan Shah Resume" role="button">
              <button type="button" class="btn btn-warning">
              console.log(Resume)
              </button>
              </a>
          </div>      
        </div>
        
    )
}

export default Landing;