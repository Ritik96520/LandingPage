import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`partnership-content-wrapper ${className}`}>
      <div className="partnership-content">
        <img
          className="partnership-content-child"
          loading="lazy"
          alt=""
          src="/vector-23.svg"
        />
        <div className="partnership-description">
          <div className="partnership-call-to-action">
            <div className="partnership-call-to-action-child" />
            <div className="partnership-heading-wrapper">
              <div className="partnership-heading">
                <h3 className="join-family">Join Family</h3>
                <div className="partnership-benefits">
                  <h3 className="become-a-samriddh">
                    Become a SAMRIDDH Sathi/Samriddh Sahayak and sell financial
                    products
                  </h3>
                  <div className="benefits-highlight">
                    <div className="click-image" />
                    <button className="benefits-action">
                      <div className="benefits-action-child" />
                      <div className="click-to-know">Click to know more</div>
                      <div className="partnership-indicator">
                        <img
                          className="partnership-indicator-child"
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-div">
              <div className="frame-child1" />
              <div className="calculator-content">
                <div className="calculator-container">
                  <div className="payment-types">
                    <div className="calculator-title">
                      <div className="div">12:15</div>
                    </div>
                    <img
                      className="screenshot-2024-05-23-at-651"
                      alt=""
                      src="/screenshot-20240523-at-651-1@2x.png"
                    />
                    <div className="calculator-inputs">
                      <div className="payment-categories">
                        <div className="payment-categories1">
                          <div className="wifi-icon-list" />
                          <div className="wifi-icon-list1" />
                          <div className="wifi-icon-list2" />
                          <div className="wifi-icon-list3" />
                        </div>
                        <div className="input-calculations">
                          <div className="payment-image-parent">
                            <div className="payment-image" />
                            <div className="payment-image1" />
                            <div className="payment-image2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b className="emi-calculator">EMI CALCULATOR</b>
                </div>
              </div>
              <div className="mobile-preview">
                <img
                  className="screenshot-2024-07-25-at-752"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240725-at-75246pm-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="offerings-title">
            <div className="working-content">
              <div className="frame-parent">
                <div className="partner-image-wrapper">
                  <div className="partner-image" />
                </div>
                <h3 className="how-does-samriddh-container">
                  <span className="how-does-samriddh-container1">
                    <i className="how-does">{`How does `}</i>
                    <i className="samriddh-kendra-works">
                      <span>Samriddh Kendra works</span>
                      <span className="span1">?</span>
                    </i>
                  </span>
                </h3>
              </div>
              <div className="samriddh-kendra-is">
                Samriddh Kendra is pioneering an innovative approach to loan and
                insaurance distribution in rural Bharat by leveraging technology
                and establishing the Samriddh Sathi for effective
                implementation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
