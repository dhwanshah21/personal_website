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
            &ldquo;
            {summary}
            &rdquo;
        </div>
    </div>
)
}

export default HomePage;