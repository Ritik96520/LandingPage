import PartnerFeedback from "./PartnerFeedback";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./InsuranceContent.css";

const InsuranceContent = ({ className = "" }) => {
  return (
    <div className={`insurance-content2 ${className}`}>
      <div className="insurance-content-item" />
      <div className="wrapper-male-memojis1">
        <img
          className="male-memojis-icon1"
          loading="lazy"
          alt=""
          src="/male-memojis@2x.png"
        />
      </div>
      <div className="loan-description">
        <PartnerFeedback
          propBorderRadius="13.6px 13.6px 0px 3.14px"
          propBackgroundColor="#fff"
        />
        <div className="rectangle-parent7">
          <div className="frame-child9" />
          <FrameComponent1 />
          <div className="author-details-two-parent">
            <div className="author-details-two">
              <div className="integration-image-parent">
                <img
                  className="integration-image-icon"
                  loading="lazy"
                  alt=""
                  src="/42-12-1@2x.png"
                />
                <div className="customer-name-container">
                  <div className="name-display-parent">
                    <div className="name-display">
                      <div className="apoorva-jain2">{`Apoorva Jain `}</div>
                    </div>
                    <div className="porter2">Porter</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="integration-divider" />
          </div>
        </div>
      </div>
      <div className="insurance-content-inner">
        <div className="loan-button-parent">
          <div className="loan-button">
            <div className="partner-images">
              <div className="partner-images-child" />
              <div className="loan-content">
                <img
                  className="screenshot-2024-07-24-at-1027-icon"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240724-at-102735-pmremovebgpreview-1@2x.png"
                />
                <div className="quote-background-four" />
              </div>
            </div>
          </div>
          <div className="testimonial-type">
            <div className="our-customers">Our Customers</div>
          </div>
          <div className="testimonial-background-wrapper">
            <div className="testimonial-background">
              <img
                className="testimonial-background-child"
                loading="lazy"
                alt=""
                src="/group-1171280142.svg"
              />
              <img
                className="testimonial-background-item"
                alt=""
                src="/group-1171280143.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InsuranceContent.propTypes = {
  className: PropTypes.string,
};

export default InsuranceContent;
