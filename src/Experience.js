import React from 'react';
import './Experience.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Experience () {
    return (
        <div class="container experience-content">
            <div class="row">
                <h2>Industrial Experience</h2>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Roche Molecular Systems</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Software Development Intern, Santa Clara, USA</h6>
                        <h6 class="card-subtitle mb-2 text-muted">June 2019 - December 2019</h6>
                        <p class="card-text">
                            <ul>
                                <li>Designed components for the new patient summary page by incorporating user’s feedback resulting in fewer clicks for care givers to find and update useful information about the patient</li>
                                <li>Worked on internationalization and localization of the product to support French language helping sales team to increase revenue from Europe</li>
                                <li>Aided in improving patient outcomes by aggregating complex diagnostic and treatment data from medical devices and IT systems and presenting it effectively to clinicians, physicians and caregivers at the point of care</li>
                                <li>Participated in SCRUM and Sprint planning meetings and contributed new ideas for improving the product</li>
                            </ul>
                        </p>
                        <p class="card-text technologies-list">
                        Technologies: Angular JS, JavaScript (ES6), Typescript, SCSS, HTML5, VS Code, Bit Bucket, Postman, Jasmine and Karma
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tata Consultancy Services</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Web Developer Intern, INDIA</h6>
                        <h6 class="card-subtitle mb-2 text-muted">January 2018 - April 2018</h6>
                        <p class="card-text">
                            <ul>
                                <li>Key contributor in digitizing the traffic violation and fine collection system which helped the Gujarat government for strict law enforcement and improvement of public safety</li>
                                <li>Worked with 2 other interns to implement a fine collection module which helped violators to pay fine remotely and also increased the revenue for the government</li>
                                <li>Worked closely with internal and external design, business and technical counterparts to develop and deliver projects on time, resulting in higher customer satisfaction</li>
                                <li>Participated in Agile development of project timelines, implementation design specifications, system flow diagrams, documentation, testing and ongoing support of systems </li>
                            </ul>
                        </p>
                        <p class="card-text technologies-list">
                        Technologies: React.js, Node.js, JavaScript (ES5-ES6), HTML5, CSS3, VS Code, AWS, Git
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;