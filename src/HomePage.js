import React from 'react';
import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import personalImage from './images/personal_img.png';


function HomePage() {
return (
    <div className="HomePage container">
        <div class="row">
            <div class="col-md-6">
                <div className="image-identity">
                <img className="personal-image" src={personalImage} />
                </div>
            </div>
            <div class="col-md-6">
                <div className="home-text-showcase">
                    <span>
                    <h1><strong> &ldquo;Hi,</strong></h1>
                    <h2> I’m a Front End Developer who loves to create interactive, responsive and easy to use web UI.&rdquo;</h2>
                    </span>            
                    <button type="button" class="btn btn-outline-warning btn-lg">
                        <a href="/about">Check Out More!</a>
                    </button>
                </div>
            </div> 
        </div>
        
       
        
    </div>
)
}

export default HomePage;