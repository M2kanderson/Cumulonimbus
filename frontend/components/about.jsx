var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <div className="about">
        <h1 className= "about-header">About Us</h1>
        <section className="about-section">
          <div className="about-image-container">
            <img src="http://res.cloudinary.com/pulsr/image/upload/c_scale,h_250/v1469463431/Cumulonimbus/Justin_Anderson.jpg"></img>
          </div>
          <ul>
            <li>Justin Anderson</li>
            <li>I'm a software developer with a background in Civil Engineering
                and a passion for solving complex engineering problems. I am
                looking for an opportunity to pursue this passion! I have
                experience with React, Ruby on Rails, PostgreSQL, JavaScript,
                jQuery, and C++.
            </li>
            <li>
              <ul className="about-links">
                <li>
                  Github: <a href="https://github.com/M2kanderson">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                </li>
                <li>Personal Website: </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="about-section">
          <img src="http://res.cloudinary.com/dpyncrw04/image/upload/v1469466659/Mark_Mullan_optx8p.jpg"></img>
          <ul>
            <li>Mark Mullan</li>
            <li>A little bit about myself – Embedded Systems Recruiter turned Software Engineer,
              inspired to make a career change by the work of the people who I would recruit.
              Although my strengths are in React.js, JavaScript, and Ruby on Rails, recruiting
              embedded engineering has given me a deep level of respect for resource-constrained programming.
            </li>
            <li>
              <ul className="about-links">
                <li>
                  Github: <a href="https://github.com/markrmullan">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
                </li>
                <li>
                  LinkedIn: <a href="https://www.linkedin.com/in/markrmullan">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>Personal Website: </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    );
  }
});

module.exports = About;
