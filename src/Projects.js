import React from 'react';
import './Projects.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-social.css';
function Projects () {
    return (
        <div className=" container projects-content">
            <div class="row">
                <h2>Academic Projects</h2>
            </div>
            <br/>
            <div class="row">
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">Koob E-Book Application</h5>
                <p class="card-text card-text-description">
                    Koob is a Book reader Application for English as Second Language course students.
                    It helps users to search for a book, lookup for meaning, vote and look at teacher's vote for better understandability.
                    Users can also see the graph of their own which is time spent on each page.
                </p>
                <a href="https://github.com/dhwanshah21/E-Book-Cordova-Application" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code
                </a>
            </div>
            </div>
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">TodoList React Application</h5>
                <p class="card-text card-text-description">
                    TodoList is a simple React Application where users can add the todos before they actually forget them.
                    The Application actually helps to also check for the tasks completed and can be filtered out.
                    For better management, total number of tasks remaining are also displayed.
                </p>
                <a href="https://github.com/dhwanshah21/TodoList-React-App" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code</a>
            </div>
            </div>
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">REST API Calling Project</h5>
                <p class="card-text card-text-description">
                    The project is just to enhance the command on Javascript Frameworks. 
                    The project comprises of 3 API calls in React with Express framework and rendering the data in responsive and interactive way.
                    Weather showing weather of given location, Currency Conversion between countries and Jokes
                </p>
                <a href="https://github.com/dhwanshah21/REST-API-Calling-Project" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code</a>
            </div>
            </div>
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">ChatBox-Application</h5>
                <p class="card-text card-text-description">
                    ChatBox is class project where users can join and gets added to the group.
                    The users can then start chatting with other users. 
                    It is more of a starting point for any chat medium. 
                    The project is more of better understanding and hands-on for the technologies like Mongo db and redis server with ReactJS.
                </p>
                <a href="https://github.com/dhwanshah21/ChatBox-Application" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code</a>
            </div>
            </div>
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">Mail Application</h5>
                <p class="card-text card-text-description">
                    Mail Application is just a demo of email project at an initial stage. 
                    The application consists of the features which a simple mail app offer. 
                    The user can see the recent mails popped up in the inbox.
                </p>
                <a href="https://github.com/dhwanshah21/Mail-Application" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code</a>
            </div>
            </div>
            <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">Gator Voice</h5>
                <p class="card-text card-text-description">
                    Gator Voice is a website for all the SF State students where they can share, post or upload any productive ideas.
                    It gives the right platform to showcase or help the students for any technical or non technical but productive discussions.

                </p>
                <a href="https://github.com/dhwanshah21/GatorVoice" class="btn btn-primary btn-social btn-github">
                    <i class="fab fa-github"></i>
                    Source Code</a>
            </div>
            </div>
            </div>
            <div class="row">
            <button type="button" class="btn btn-outline-warning btn-lg">
            <a href="/experience">Check Out Experience</a>
            </button>
            </div>
        </div>
    )
}

export default Projects;