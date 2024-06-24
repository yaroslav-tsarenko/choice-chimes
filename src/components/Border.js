import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Border.css";

const Border = ({
  className = "",
  link,
  vEXGiftCard,
  discoverOver150BrandsWith,
  giftCardGiftACardGiftACho,
  propLeft,
  propTop,
}) => {
  const borderStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`border3 ${className}`} style={borderStyle}>
      <div className="cards">
        <img className="link-icon9" alt="" src={link} />
      </div>
      <div className="vex-gift-card">{vEXGiftCard}</div>
      <div className="discover-over-150-container">
        <span>
          <p className="discover-over-150">{discoverOver150BrandsWith}</p>
          <p className="gift-card-gift">{giftCardGiftACardGiftACho}</p>
        </span>
      </div>
      <div className="card-details">
        <div className="card-info1">
          <div className="card-info-icons">
            <div className="info15">Info</div>
          </div>
          <button className="link20">
            <div className="buy14">Buy</div>
          </button>
        </div>
      </div>
    </div>
  );
};

Border.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  vEXGiftCard: PropTypes.string,
  discoverOver150BrandsWith: PropTypes.string,
  giftCardGiftACardGiftACho: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Border;
