import PartnerFeedback from "./PartnerFeedback";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent5 ${className}`}>
      <div className="frame-child7" />
      <div className="wrapper-male-memojis">
        <img
          className="male-memojis-icon"
          loading="lazy"
          alt=""
          src="/male-memojis@2x.png"
        />
      </div>
      <div className="testimonial-content">
        <div className="content-blocks">
          <div className="testimonial-quotes-wrapper">
            <div className="testimonial-quotes">
              <div className="partner-quote" />
              <img
                className="screenshot-2024-07-24-at-205-icon"
                loading="lazy"
                alt=""
                src="/screenshot-20240724-at-20556-amremovebgpreview-1@2x.png"
              />
            </div>
          </div>
          <div className="author-details">
            <div className="author-names">
              <div className="our-partners">Our Partners</div>
              <div className="customer-name">
                <div className="customer-company">
                  <img
                    className="customer-company-child"
                    loading="lazy"
                    alt=""
                    src="/group-1171280142.svg"
                  />
                  <img
                    className="customer-company-item"
                    loading="lazy"
                    alt=""
                    src="/group-1171280143.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback-navigation">
        <PartnerFeedback />
        <div className="rectangle-parent6">
          <div className="frame-child8" />
          <FrameComponent1 />
          <div className="testimonial-user">
            <div className="user-name-elements-wrapper">
              <div className="user-name-elements">
                <img
                  className="loan-apply-button-background"
                  loading="lazy"
                  alt=""
                  src="/42-12@2x.png"
                />
                <div className="user-name">
                  <div className="apoorva-jain-parent">
                    <div className="apoorva-jain1">{`Apoorva Jain `}</div>
                    <div className="porter1">Porter</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loan-apply-divider" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
