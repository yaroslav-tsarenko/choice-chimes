import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Border2.css";

const Border2 = ({
  className = "",
  premierInnGiftCards,
  atPremierInn,
  propLeft,
  propTop,
  propBackgroundImage,
}) => {
  const border2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const link1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`border5 ${className}`} style={border2Style}>
      <div className="link-frame">
        <div className="link22" style={link1Style}>
          <div className="gc201png" />
        </div>
      </div>
      <div className="premier-inn-gift">{premierInnGiftCards}</div>
      <div className="leisure-voucher-gift-container">
        <span>
          <p className="leisure-voucher-gift">
            Leisure Voucher Gift Cards redeemable
          </p>
          <p className="at-premier-inn">{atPremierInn}</p>
        </span>
      </div>
      <div className="border-child">
        <div className="frame-parent9">
          <div className="info-wrapper10">
            <div className="info17">Info</div>
          </div>
          <button className="link23">
            <div className="buy16">Buy</div>
          </button>
        </div>
      </div>
    </div>
  );
};

Border2.propTypes = {
  className: PropTypes.string,
  premierInnGiftCards: PropTypes.string,
  atPremierInn: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propBackgroundImage: PropTypes.any,
};

export default Border2;
