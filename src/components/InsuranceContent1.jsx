import InsuranceButton from "./InsuranceButton";
import PropTypes from "prop-types";
import "./InsuranceContent1.css";

const InsuranceContent1 = ({ className = "" }) => {
  return (
    <section className={`insurance-content1 ${className}`}>
      <div className="insurance-item-parent">
        <div className="insurance-item">
          <div className="insurance-card-image" />
          <div className="insurance-card-image1" />
        </div>
        <div className="insurance-description">
          <div className="insurance-details">
            <h3 className="insaurance">Insaurance</h3>
            <div className="insurance-screenshot">
              <div className="insurance-screenshot-child" />
              <img
                className="screenshot-2024-06-10-at-1015-icon"
                loading="lazy"
                alt=""
                src="/screenshot-20240610-at-1015-1@2x.png"
              />
            </div>
          </div>
          <div className="ipsum-has-been1">
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </div>
        </div>
        <InsuranceButton applyForLoan="Click to know more" propGap="23.1px" />
      </div>
      <div className="insaurancea-wrapper">
        <h1 className="insaurancea">INSAURANCEA</h1>
      </div>
    </section>
  );
};

InsuranceContent1.propTypes = {
  className: PropTypes.string,
};

export default InsuranceContent1;
