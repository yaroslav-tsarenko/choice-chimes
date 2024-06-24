import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  headerTop,
  headerPosition,
  logoIconPadding,
}) => {
  const headerStyle = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
    };
  }, [headerTop, headerPosition]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: logoIconPadding,
    };
  }, [logoIconPadding]);

  return (
    <section className={`header10 ${className}`} style={headerStyle}>
      <div className="header11">
        <header className="background2">
          <div className="delivery-info">
            <div className="free-presentation-card-container2">
              <span>FREE</span>
              <span className="presentation-card-with2">
                {" "}
                presentation card with every order
              </span>
            </div>
          </div>
          <div className="delivery-info1">
            <div className="delivery-from-2502">Delivery from £2.50</div>
          </div>
          <div className="login-group">
            <a
              className="login3"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-416"
              target="_blank"
            >
              Login
            </a>
            <div className="register2">Register</div>
          </div>
        </header>
        <div className="link16" />
        <div className="link17" />
        <div className="top-navigation">
          <div className="logo-nav">
            <div className="logo2">
              <div className="logo-wrapper1">
                <div className="logo-frame" style={frameDiv1Style}>
                  <img
                    className="logo-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="choice-chimes2">Choice Chimes</div>
              </div>
            </div>
            <div className="search1">
              <div className="container4">
                <div className="input5" />
                <div className="input6">
                  <div className="container5">
                    <div className="im-looking-for2">I'm looking for...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info1">
              <div className="contact-details">
                <div className="call-us2">{`Call us `}</div>
                <div className="phone">0371 3845931</div>
              </div>
            </div>
            <div className="cart1">
              <div className="cart-link2">
                <img
                  className="link-icon8"
                  loading="lazy"
                  alt=""
                  src="/link@2x.png"
                />
                <div className="cart-item-count1">
                  <div className="item-count">
                    <div className="items2">0 items</div>
                    <div className="div8">(£0.00)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border2">
          <div className="menu-links">
            <a
              className="gift-cards2"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >{`GIFT CARDS & GIFT VOUCHERS`}</a>
            <div className="shop-by-recipient2">SHOP BY RECIPIENT</div>
            <a
              className="shop-by-category2"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >
              SHOP BY CATEGORY
            </a>
            <a
              className="vex-corporate2"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >
              VEX CORPORATE
            </a>
            <div className="buy-digital-vex2">BUY DIGITAL VEX CARDS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerTop: PropTypes.any,
  headerPosition: PropTypes.any,
  logoIconPadding: PropTypes.any,
};

export default Header;
