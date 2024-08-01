import PropTypes from "prop-types";
import "./FooterLinks.css";

const FooterLinks = ({ className = "" }) => {
  return (
    <div className={`footer-links ${className}`}>
      <div className="link-columns">
        <div className="platform">Platform</div>
        <div className="platform-link-items">
          <div className="home">Home</div>
          <div className="get-in-touch">Get in touch</div>
          <div className="how-it-works">How it Works</div>
          <div className="faq">FAQ</div>
        </div>
      </div>
      <div className="information-links">
        <div className="information-link-items">
          <div className="about">About</div>
        </div>
        <div className="about-us-link">
          <div className="about-us-container">
            <div className="about-us1">About Us</div>
          </div>
          <div className="careers-link">
            <div className="careers-container">
              <div className="careers-items">
                <div className="careers">Careers</div>
              </div>
              <button className="hiring">
                <div className="hiring-now">Hiring now</div>
              </button>
            </div>
            <div className="blog-link">
              <div className="blog">Blog</div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-columns1">
        <div className="infromation">Infromation</div>
        <div className="privacy-policy-parent">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-of-use">Terms of Use</div>
          <div className="refund-policy">Refund Policy</div>
          <div className="grievance-officer">Grievance officer</div>
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {
  className: PropTypes.string,
};

export default FooterLinks;
