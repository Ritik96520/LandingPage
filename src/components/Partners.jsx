import PropTypes from "prop-types";
import "./Partners.css";

const Partners = ({ className = "" }) => {
  return (
    <section className={`partners ${className}`}>
      <div className="our-trusted-financial-partners-wrapper">
        <h3 className="our-trusted-financial-container">
          <i className="our">{`Our `}</i>
          <i className="trusted-financial-partners">
            Trusted Financial Partners
          </i>
          <i className="we-work-only-with-best">
            <span className="span2">{` `}</span>
            <span>- We work only with best!</span>
          </i>
        </h3>
      </div>
      <div className="partner-logos">
        <div className="logo-grid">
          <div className="logo-placeholder-one" />
          <img
            className="mannapuram-finance-logo"
            loading="lazy"
            alt=""
            src="/mannapuram-finance-logo@2x.png"
          />
          <img
            className="paysense-logo-icon"
            loading="lazy"
            alt=""
            src="/paysense-logo@2x.png"
          />
          <img
            className="chola-logo-icon"
            loading="lazy"
            alt=""
            src="/chola-logo@2x.png"
          />
          <div className="frame-div">
            <div className="frame-child3" />
            <img
              className="faircent-logo-icon"
              alt=""
              src="/faircent-logo@2x.png"
            />
          </div>
          <div className="recognition-logos">
            <div className="recognition-logos-child" />
            <img
              className="hdfc-bank-logo"
              loading="lazy"
              alt=""
              src="/hdfc-bank-logo@2x.png"
            />
          </div>
          <div className="financial-partners">
            <div className="financial-partners-child" />
            <img
              className="indian-bank-logo"
              alt=""
              src="/indian-bank-logo@2x.png"
            />
          </div>
          <div className="partner-names4">
            <div className="partner-names-inner" />
            <img
              className="smfg-india-logo"
              alt=""
              src="/smfg-india-logo@2x.png"
            />
          </div>
          <div className="partner-names5">
            <div className="partner-names-child1" />
            <img
              className="bandhan-bank-logo"
              alt=""
              src="/bandhan-bank-logo@2x.png"
            />
          </div>
          <div className="rectangle-parent2">
            <div className="frame-child4" />
            <img
              className="finnable-logo-icon"
              alt=""
              src="/finnable-logo@2x.png"
            />
          </div>
          <img
            className="utakrsh-small-finance-bank-log"
            loading="lazy"
            alt=""
            src="/utakrsh-small-finance-bank-logo@2x.png"
          />
          <img
            className="lendingkart-logo-icon"
            loading="lazy"
            alt=""
            src="/lendingkart-logo@2x.png"
          />
          <img
            className="jana-small-finance-bank-logo"
            loading="lazy"
            alt=""
            src="/jana-small-finance-bank-logo@2x.png"
          />
          <img
            className="piramal-finance-logo"
            alt=""
            src="/piramal-finance-logo@2x.png"
          />
          <img
            className="union-bank-logo"
            alt=""
            src="/union-bank-logo@2x.png"
          />
          <img
            className="bank-of-baroda-logo"
            alt=""
            src="/bank-of-baroda-logo@2x.png"
          />
          <img
            className="iifl-finance-logo"
            alt=""
            src="/iifl-finance-logo@2x.png"
          />
          <img className="yes-bank-logo" alt="" src="/yes-bank-logo@2x.png" />
          <img
            className="bajaj-finserve-logo"
            alt=""
            src="/bajaj-finserve-logo@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
};

export default Partners;
