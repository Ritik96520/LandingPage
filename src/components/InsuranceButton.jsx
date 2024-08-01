import { useMemo } from "react";
import PropTypes from "prop-types";
import "./InsuranceButton.css";

const InsuranceButton = ({ className = "", applyForLoan, propGap }) => {
  const insuranceButtonStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`insurance-button ${className}`}
      style={insuranceButtonStyle}
    >
      <div className="insurance-button-child" />
      <div className="apply-for-loan">{applyForLoan}</div>
      <div className="insurance-button-inner">
        <img className="frame-inner" loading="lazy" alt="" src="/arrow-1.svg" />
      </div>
    </div>
  );
};

InsuranceButton.propTypes = {
  className: PropTypes.string,
  applyForLoan: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default InsuranceButton;
