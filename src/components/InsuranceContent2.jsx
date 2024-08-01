import PropTypes from "prop-types";
import "./InsuranceContent2.css";
// import AboutUs from "../pages/AboutUs";

const InsuranceContent2 = ({ className = "" }) => {
  return (
    <header className={`insurance-content ${className}`}>
      <div className="insurance-content-child" />
      <div className="main-content">
        <a className="samriddh">Samriddh</a>
      </div>
      <div className="navigation">
        <a href="AboutUs.jsx" className="about-us">About Us</a>
        <a className="products">Products</a>
      </div>
      <div className="user-actions">
        <a className="contact-us">Contact Us</a>
        <div className="become-our-partner">Become our Partner</div>
        <a className="login">Login</a>
      </div>
     
    </header>
  );
};

InsuranceContent2.propTypes = {
  className: PropTypes.string,
};

export default InsuranceContent2;
