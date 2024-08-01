import PropTypes from "prop-types";
import "./Recognitions.css";

const Recognitions = ({ className = "" }) => {
  return (
    <div className={`recognitions ${className}`}>
      <div className="recognitions-wrapper">
        <h3 className="recognitions1">Recognitions</h3>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child2" />
        <div className="recognized-by-parent">
          <div className="recognized-by"> 
           <img
            className="wadhwanifoundation-logo-1-icon"
            loading="lazy"
            alt=""
            src="/wadhwanifoundation-logo-1@2x.png"
          /></div>
          <div className="recognized-by1">
          <img className="stpi-logo-1" alt="" src="/stpi-logo-1@2x.png" /></div>
          <div className="recognized-by2"> 
          <img
            className="bihar-say-logo-1"
            loading="lazy"
            alt=""
            src="/bihar-say-logo-1@2x.png"
          /></div>
          <div className="recognized-by3"> 
          <img
            className="startup-india-logo-1"
            alt=""
            src="/startup-india-logo-1@2x.png"
          /></div>
          <div className="recognized-by4">
         <img
            className="startup-bihar-logo-1"
            alt=""
            src="/startup-bihar-logo-1@2x.png"
          />
          </div>
         
         
         
        </div>
      </div>
    </div>
  );
};

Recognitions.propTypes = {
  className: PropTypes.string,
};

export default Recognitions;
