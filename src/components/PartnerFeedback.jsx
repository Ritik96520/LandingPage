import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PartnerFeedback.css";

const PartnerFeedback = ({
  className = "",
  propBorderRadius,
  propBackgroundColor,
}) => {
  const partnerFeedbackStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  return (
    <div
      className={`partner-feedback ${className}`}
      style={partnerFeedbackStyle}
    >
      <div className="partner-feedback-child" />
      <div className="partner-container">
        <div className="rectangle-parent3">
          <div className="frame-child5" />
          <i className="top-notch-team">Top notch team, top notch product</i>
          <div className="metaforms-has-been">
            Metaforms has been a gamechanger in our journey of optimising our
            user funnels. The level of attention to detail the team brings with
            pro-activeness in understanding the nuances of business is
            exemplary. 
          </div>
        </div>
      </div>
      <div className="author-label-container">
        <div className="customers">
          <div className="apoorva-jain">{`Apoorva Jain `}</div>
          <div className="porter">Porter</div>
        </div>
      </div>
      <div className="testimonial-separator" />
    </div>
  );
};

PartnerFeedback.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default PartnerFeedback;
