import PropTypes from "prop-types";
import "./ProcessSteps.css";

const ProcessSteps = ({ className = "" }) => {
  return (
    <div className={`process-steps2 ${className}`}>
      <div className="process-steps-item" />
      <div className="div2">4</div>
      <div className="footer">
        <div className="footer-child" />
        <div className="step-details">
          <div className="qulified-lead-passed">
            Qulified lead passed and loan dispersed
          </div>
          <div className="offer-selection">
            <div className="after-you-select">
              After you select the offer, Samriddh app passes the lead to
              lender, after which they disperse the loan
            </div>
          </div>
        </div>
        <div className="step-indicator">
          <div className="step4">STEP</div>
        </div>
      </div>
      <img
        className="screenshot-2024-07-25-at-658-icon"
        loading="lazy"
        alt=""
        src="/screenshot-20240725-at-65845-pmremovebgpreview-1@2x.png"
      />
    </div>
  );
};

ProcessSteps.propTypes = {
  className: PropTypes.string,
};

export default ProcessSteps;
