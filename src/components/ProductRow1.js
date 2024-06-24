import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductRow1.css";

const ProductRow1 = ({ className = "", border, propWidth }) => {
  const linkStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`product-row1 ${className}`}>
      <div className="product-card">
        <img className="border-icon12" loading="lazy" alt="" src={border} />
      </div>
      <div className="card-content">
        <div className="card-info">
          <div className="info13">Info</div>
        </div>
        <div className="link18" style={linkStyle}>
          <div className="buy12">Buy</div>
        </div>
      </div>
    </div>
  );
};

ProductRow1.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default ProductRow1;
