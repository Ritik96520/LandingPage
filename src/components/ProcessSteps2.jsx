import PropTypes from "prop-types";
import "./ProcessSteps2.css";

const ProcessSteps2 = ({ className = "" }) => {
  return (
    <div className={`process-steps ${className}`}>
      <img
        className="screenshot-2024-06-16-at-804-icon"
        loading="lazy"
        alt=""
        src="/screenshot-20240616-at-80422-pmremovebgpreview-1@2x.png"
      />
      <div className="step-connectors" />
      <div className="step-descriptions">2</div>
      <div className="partner-names1">
        <div className="partner-names-child" />
        <div className="validation-process">
          <div className="offer-selection-steps">
            <div className="validation">Validation</div>
          </div>
          <div className="samriddh-app-validates">
            Samriddh app validates your requirements with lenders and shows
            offer
          </div>
        </div>
        <div className="step-progression">
          <div className="partner-names2">
            <div className="step1">STEP</div>
            <div className="step2">STEP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProcessSteps2.propTypes = {
  className: PropTypes.string,
};

export default ProcessSteps2;
