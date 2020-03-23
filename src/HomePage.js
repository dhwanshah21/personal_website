import React from 'react';
import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import personalImage from './images/personal_img.png';


function HomePage() {
    let summary = "I am Master's student at SF STATE";
return (
    <div className="HomePage">
        <div className="image-identity">
            <img className="personal-image" src={personalImage} />
        </div>
        <div className="home-text-showcase">
        <span>
            <h1><strong> &ldquo;Hi,</strong></h1>
            <h2> I’m a Front End Developer who love to create interactive, responsive and easy to use web UI.&rdquo;</h2>
        </span>            
        <button type="button" class="btn btn-outline-warning btn-lg">
            <a href="/about">Check Out More!</a>
        </button>
        </div> 
        
    </div>
)
}

export default HomePage;