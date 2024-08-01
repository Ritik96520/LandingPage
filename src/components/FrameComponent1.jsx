import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`feedback-elements-wrapper ${className}`}>
      <div className="feedback-elements">
        <div className="feedback-elements-child" />
        <div className="rectangle-parent4">
          <div className="frame-child6" />
          <div className="loan-icon-parent">
            <img className="loan-icon" alt="" src="/loan-icon.svg" />
            <div className="loan-circle" />
          </div>
        </div>
        <div className="all-necessary-integrations-wer-wrapper">
          <i className="all-necessary-integrations">
            All necessary integrations were available.
          </i>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
