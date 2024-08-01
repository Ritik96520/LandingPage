import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className="hero-message-parent">
        <div className="hero-message">
          <div className="workflow-illustration">
            <h1 className="bridging-the-gap-container">
              <i className="bridging-the-gap">{`Bridging the gap `}</i>
              <i className="between-borrower-and">
                between borrower and Lenders
              </i>
            </h1>
            <div className="our-mission-is">
              Our mission is to connect rural customers with reliable services.
            </div>
          </div>
        </div>
        <div className="rectangle-group">
          <img className="frame-item" alt="" src="/rectangle-2@2x.png" />
          <img
            className="hero-shape-icon"
            loading="lazy"
            alt=""
            src="/rectangle-62419@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
