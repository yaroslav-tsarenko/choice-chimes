import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`header-wrapper ${className}`}>
      <header className="header">
        <div className="header1">
          <div className="background">
            <div className="header-offer">
              <div className="free-presentation-card-container">
                <span>FREE</span>
                <span className="presentation-card-with">
                  {" "}
                  presentation card with every order
                </span>
              </div>
            </div>
            <div className="header-offer1">
              <div className="delivery-from-250">Delivery from £2.50</div>
            </div>
            <div className="login-parent">
              <a
                className="login"
                href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-416"
                target="_blank"
              >
                Login
              </a>
              <div className="register">Register</div>
            </div>
          </div>
          <div className="link" />
          <div className="link1" />
          <div className="header-inner">
            <div className="logo-parent">
              <div className="logo">
                <div className="logo-container">
                  <div className="logo-image-wrapper">
                    <img
                      className="logo-image-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="choice-chimes">Choice Chimes</div>
                </div>
              </div>
              <div className="search-bar">
                <div className="container">
                  <div className="input" />
                  <div className="input1">
                    <div className="container1">
                      <div className="im-looking-for">I'm looking for...</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-info-wrapper">
                <div className="contact-info">
                  <div className="call-us">{`Call us `}</div>
                  <div className="contact-spacer">0371 3845931</div>
                </div>
              </div>
              <div className="cart-link-wrapper">
                <div className="cart-link">
                  <img
                    className="link-icon6"
                    loading="lazy"
                    alt=""
                    src="/link@2x.png"
                  />
                  <div className="cart-item-count">
                    <div className="cart-item-info">
                      <div className="items">0 items</div>
                      <div className="div">(£0.00)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="gift-cards-gift-vouchers-parent">
              <a
                className="gift-cards"
                href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
                target="_blank"
              >{`GIFT CARDS & GIFT VOUCHERS`}</a>
              <div className="shop-by-recipient">SHOP BY RECIPIENT</div>
              <a
                className="shop-by-category"
                href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
                target="_blank"
              >
                SHOP BY CATEGORY
              </a>
              <a
                className="vex-corporate"
                href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
                target="_blank"
              >
                VEX CORPORATE
              </a>
              <div className="buy-digital-vex">BUY DIGITAL VEX CARDS</div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
