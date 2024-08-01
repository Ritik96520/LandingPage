import PropTypes from "prop-types";
import "./ProcessSteps1.css";

const ProcessSteps1 = ({ className = "" }) => {
  return (
    <div className={`process-steps1 ${className}`}>
      <img
        className="screenshot-2024-06-16-at-803-icon"
        loading="lazy"
        alt=""
        src="/screenshot-20240616-at-80342-pmremovebgpreview-1@2x.png"
      />
      <div className="process-steps-child" />
      <div className="div1">3</div>
      <div className="partner-names3">
        <div className="partner-names-item" />
        <div className="frame-group">
          <div className="select-loan-offer-wrapper">
            <div className="select-loan-offer">Select loan offer</div>
          </div>
          <div className="out-of-multiple">
            Out of multiple loan offers given by samriddh, select the required
            loan offer
          </div>
        </div>
        <div className="step-wrapper">
          <div className="step3">STEP</div>
        </div>
      </div>
    </div>
  );
};

ProcessSteps1.propTypes = {
  className: PropTypes.string,
};

export default ProcessSteps1;
