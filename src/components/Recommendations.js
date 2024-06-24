import ProductRow1 from "./ProductRow1";
import PropTypes from "prop-types";
import "./Recommendations.css";

const Recommendations = ({ className = "" }) => {
  return (
    <section className={`recommendations ${className}`}>
      <div className="you-may-like">
        <div className="recommendations-header">
          <h1 className="you-might-also">You might also like</h1>
          <div className="view-all">
            <button className="input7">
              <div className="view-full-range">View Full Range</div>
            </button>
          </div>
        </div>
        <div className="product-grid1">
          <ProductRow1 border="/border@2x.png" />
          <ProductRow1 border="/border-1@2x.png" propWidth="48.1px" />
          <ProductRow1 border="/border-2@2x.png" propWidth="48.1px" />
          <div className="related-product">
            <img
              className="border-icon13"
              loading="lazy"
              alt=""
              src="/border-3@2x.png"
            />
            <div className="related-product-content">
              <div className="related-product-info">
                <div className="info14">Info</div>
              </div>
              <div className="link19">
                <div className="buy13">Buy</div>
              </div>
            </div>
          </div>
          <ProductRow1 border="/border-4@2x.png" propWidth="48.1px" />
          <ProductRow1 border="/border-5@2x.png" propWidth="unset" />
        </div>
      </div>
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
