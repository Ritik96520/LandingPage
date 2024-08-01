import InsuranceContent2 from "../components/InsuranceContent2";
import FrameComponent3 from "../components/FrameComponent3";
import InsuranceContainer from "../components/InsuranceContainer";
import InsuranceContent1 from "../components/InsuranceContent1";
import FrameComponent2 from "../components/FrameComponent2";
import ProcessSteps2 from "../components/ProcessSteps2";
import ProcessSteps1 from "../components/ProcessSteps1";
import ProcessSteps from "../components/ProcessSteps";
import Recognitions from "../components/Recognitions";
import Partners from "../components/Partners";
import FrameComponent from "../components/FrameComponent";
import InsuranceContent from "../components/InsuranceContent";
import SocialMedia from "../components/SocialMedia";
import FooterLinks from "../components/FooterLinks";
import "./LANDINGPAGE.css";

const LANDINGPAGE = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-child" />
      <section className="insurance-content-parent">
        <InsuranceContent2 />
        <FrameComponent3 />
      </section>
      <InsuranceContainer />
      <InsuranceContent1 />
      <FrameComponent2 />
      <section className="process-flow-parent">
        <div className="process-flow">
          <div className="details-entry">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="basic-details">
                <div className="enter-your-basic">Enter your basic details</div>
                <div className="loan-requirements">
                  <div className="enter-kyc">{`Enter KYC & Loan requirements in the application`}</div>
                </div>
              </div>
              <div className="step-number">
                <div className="step">STEP</div>
              </div>
              <img
                className="screenshot-2024-07-25-at-659-icon"
                loading="lazy"
                alt=""
                src="/screenshot-20240725-at-65932-pmremovebgpreview-1@2x.png"
              />
            </div>
            <div className="step-progress">
              <div className="partner-names">
                <div className="progress-indicator">
                  <div className="completion-status" />
                </div>
                <div className="step-description">1</div>
              </div>
            </div>
          </div>
          <ProcessSteps2 />
          <ProcessSteps1 />
          <ProcessSteps />
        </div>
        <Recognitions />
      </section>
      <Partners />
      <section className="platform-links">
        <div className="what-does-partners-customers-wrapper">
          <h3 className="what-does-partners-container">
            <i className="what-does">{`What does `}</i>
            <span className="partners-customers">
              <i className="partners-customers1">{`Partners & Customers`}</i>
              <i className="i">{` `}</i>
            </span>
            <i className="say-about-us">
              <span className="s">s</span>
              <span>ay abo</span>
              <span className="ut-us">ut us?</span>
            </i>
          </h3>
        </div>
        <div className="category-items">
          <FrameComponent />
          <InsuranceContent />
        </div>
      </section>
      <section className="press-elements">
        <div className="trust-container">
          <h3 className="why-trust-us">{`Why Trust US? `}</h3>
          <div className="partners-testimonials">
            <div className="press-elements1">
              <div className="press-content">
                <div className="press-divider" />
              </div>
              <div className="in-the-press-wrapper">
                <div className="in-the-press">In the press ?</div>
              </div>
              <div className="partners-review-container">
                <div className="partners-review-container-child" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-background-parent">
        <div className="footer-background" />
        <div className="footer-content">
          <div className="footer-top">
            <div className="samriddh-kendra-is-container">
              <span>
                <span className="samriddh-kendra">SAMRIDDH KENDRA</span>
              </span>
              <span className="is-an-early-stage-fi-tech-play">
                <span> i</span>
                <span>
                  s an early stage Fi Tech player working in the field of
                  Finance and technology to bridge the gap between rural
                  customers and Finance Institutions
                </span>
              </span>
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className="footer-links-container">
          <FooterLinks />
        </div>
      </footer>
    </div>
  );
};

export default LANDINGPAGE;
