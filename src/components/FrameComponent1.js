import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`trending-content-wrapper ${className}`}>
      <div className="trending-content">
        <div className="trending-header">
          <h1 className="heading-3"> Trending Categories</h1>
          <div className="looking-for-the">
            Looking for the most popular Gift Card, Gift Vouchers or eGift
            Cards, then look no further. These are our top trending categories:
          </div>
        </div>
        <div className="category-grid">
          <img
            className="travel-gcs-trendspng-icon"
            loading="lazy"
            alt=""
            src="/travelgcstrendspng@2x.png"
          />
          <div className="category-rows">
            <img
              className="restaurant-gcs-v3png-icon"
              loading="lazy"
              alt=""
              src="/restaurantgcsv3png@2x.png"
            />
            <div className="category-links">
              <div className="view-our">{`View our `}</div>
              <div className="restaurant-gift-vouchers">
                Restaurant Gift Vouchers
              </div>
            </div>
          </div>
          <div className="category-rows1">
            <img
              className="food-gift-cardsv2png-icon"
              loading="lazy"
              alt=""
              src="/foodgiftcardsv2png@2x.png"
            />
            <div className="view-our-parent">
              <div className="view-our1">{`View our `}</div>
              <div className="food-gift-cards">Food Gift Cards</div>
            </div>
          </div>
          <div className="category-rows2">
            <img
              className="birthday-gcs-trendsv2png-icon"
              loading="lazy"
              alt=""
              src="/birthdaygcstrendsv2png@2x.png"
            />
            <div className="view-our-group">
              <div className="view-our2">View our </div>
              <div className="birthday-gift-cards">Birthday Gift Cards</div>
            </div>
          </div>
          <div className="category-rows3">
            <img
              className="book-gcsv2png-icon"
              loading="lazy"
              alt=""
              src="/bookgcsv2png@2x.png"
            />
            <div className="view-our-container">
              <div className="view-our3">{`View our `}</div>
              <div className="book-gift-cards">Book Gift Cards</div>
            </div>
          </div>
          <div className="category-rows4">
            <img
              className="home-gcs-trendv2png-icon"
              loading="lazy"
              alt=""
              src="/homegcstrendv2png@2x.png"
            />
            <div className="view-our-parent1">
              <div className="view-our4">{`View our `}</div>
              <div className="home-gift-cards">Home Gift Cards </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
