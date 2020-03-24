import React from 'react';
import './Landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './images/BackgroundImage.jpg';
function Landing () {
    return (
        // <div class="card stack-top container">
        //       {/* <img class="card-img-top" src="./images/BackgroundImage.jpg" alt="Card image cap"></img> */}
        //   <div class="card-body">
        //   <h5 class="card-title pop-up-card-text">
        //     I AM THE CSS &#123;...&#125; TO YOUR HTML &lt;&#47;&gt;
        //   </h5>
        //     <button type="button" class="btn btn-warning">
        //       <a href="/home">
        //       render(Website)
        //       </a>
        //     </button>
        //     <button type="button" class="btn btn-warning">
        //       <a href="/images/Dhwan_Shah_FT.pdf" download="Dhwan Shah Resume" role="button">
        //       console.log(Resume)
        //       </a>
        //     </button>
        //   </div>
        //   </div>
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
              <button type="button" class="btn btn-warning">
              <a href="/home">
              render(Website)
              </a>
              </button>
              <button type="button" class="btn btn-warning">
              <a href="/images/Dhwan_Shah_FT.pdf" download="Dhwan Shah Resume" role="button">
              console.log(Resume)
              </a>
              </button>
          </div>      
        </div>
        
    )
}

export default Landing;