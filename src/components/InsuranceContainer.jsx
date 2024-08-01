import InsuranceButton from "./InsuranceButton";
import PropTypes from "prop-types";
import "./InsuranceContainer.css";

const InsuranceContainer = ({ className = "" }) => {
  return (
    <section className={`insurance-container ${className}`}>
      <div className="offerings-header">
        <h3 className="samriddh-kendra-offerings-container">
          <span className="samriddh-kendra-offerings-container1">
            <i className="samriddh-kendra1">
              <span>Samriddh Kendra</span>
              <span className="span">{` `}</span>
            </i>
            <i className="offerings">Offerings</i>
          </span>
        </h3>
      </div>
      <div className="offerings-content">
        <div className="insurance-info">
          <div className="offering-item">
            <div className="loan-card-image" />
            <div className="loan-card-image1" />
          </div>
          <div className="offering-description">
            <h3 className="loan">Loan</h3>
            <div className="ipsum-has-been">
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div>
          </div>
          <InsuranceButton applyForLoan="Apply for loan  " />
        </div>
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <h1 className="loan1">LOAN</h1>
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-776.svg"
          />
        </div>
      </div>
    </section>
  );
};

InsuranceContainer.propTypes = {
  className: PropTypes.string,
};

export default InsuranceContainer;
