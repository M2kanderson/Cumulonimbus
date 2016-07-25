var React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <footer>
          <section className="footer-content">
            <ul className="footer-nav-list">
              <li><Link to={`/about/`}>About</Link></li>
            </ul>
          </section>

        </footer>

      </div>
    );
  }

});

module.exports = Footer;
