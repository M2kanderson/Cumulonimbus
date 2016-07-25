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
          <img src="http://res.cloudinary.com/pulsr/image/upload/c_scale,h_250/v1469465643/Cumulonimbus/AAEAAQAAAAAAAAXfAAAAJDZmNjRkMGVhLTQxYmMtNGQ4MS05MGU2LTM0ZDg4NTYyYjRjOQ.jpg"></img>
          <ul>
            <li>Mark Mullan</li>
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
      </div>
    );
  }
});

module.exports = About;
