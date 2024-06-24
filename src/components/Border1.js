import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Border1.css";

const Border1 = ({
  className = "",
  link,
  marksSpencerGiftCards,
  theUKsLeadingFashionAndFo,
  retailerWithAnEmphasisOnQ,
  andValue,
  propTop,
  propLeft,
}) => {
  const border1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`border4 ${className}`} style={border1Style}>
      <div className="link-container">
        <img className="link-icon10" alt="" src={link} />
      </div>
      <div className="marks-spencer">{marksSpencerGiftCards}</div>
      <div className="the-uks-leading-container">
        <p className="the-uks-leading">{theUKsLeadingFashionAndFo}</p>
        <p className="retailer-with-an">{retailerWithAnEmphasisOnQ}</p>
        <p className="and-value">{andValue}</p>
      </div>
      <div className="border-inner">
        <div className="frame-parent8">
          <div className="info-wrapper9">
            <div className="info16">Info</div>
          </div>
          <button className="link21">
            <div className="buy15">Buy</div>
          </button>
        </div>
      </div>
    </div>
  );
};

Border1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  marksSpencerGiftCards: PropTypes.string,
  theUKsLeadingFashionAndFo: PropTypes.string,
  retailerWithAnEmphasisOnQ: PropTypes.string,
  andValue: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Border1;
