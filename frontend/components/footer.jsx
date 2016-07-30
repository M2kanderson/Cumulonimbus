var React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

var Footer = React.createClass({

  render: function() {
    return (
        <footer>
          <section className="footer-content">
            <ul className="footer-nav-list">
              <li><Link id="about" to={`/about/`}>About the Developers</Link></li>
            </ul>
          </section>
        </footer>
    );
  }

});

module.exports = Footer;
