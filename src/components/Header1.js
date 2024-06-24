import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({
  className = "",
  headerTop,
  headerPosition,
  brandLogoIconPadding,
}) => {
  const headerStyle = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
    };
  }, [headerTop, headerPosition]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: brandLogoIconPadding,
    };
  }, [brandLogoIconPadding]);

  return (
    <section className={`header2 ${className}`} style={headerStyle}>
      <div className="header3">
        <header className="background1">
          <div className="banner-content">
            <div className="free-presentation-card-container1">
              <span>FREE</span>
              <span className="presentation-card-with1">
                {" "}
                presentation card with every order
              </span>
            </div>
          </div>
          <div className="banner-content1">
            <div className="delivery-from-2501">Delivery from £2.50</div>
          </div>
          <div className="login-group">
            <a
              className="login1"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-416"
              target="_blank"
            >
              Login
            </a>
            <div className="register1">Register</div>
          </div>
        </header>
        <div className="link2" />
        <div className="link3" />
        <div className="logo-search-container-wrapper">
          <div className="logo-search-container">
            <div className="logo2">
              <div className="logo-wrapper">
                <div className="brand-logo-wrapper" style={frameDivStyle}>
                  <img
                    className="brand-logo-icon"
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="choice-chimes2">Choice Chimes</div>
              </div>
            </div>
            <div className="search-bar">
              <div className="container2">
                <div className="input2" />
                <div className="input3">
                  <div className="container3">
                    <div className="im-looking-for1">I'm looking for...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info2">
              <div className="contact-details">
                <div className="call-us1">{`Call us `}</div>
                <div className="phone-icon">0371 3845931</div>
              </div>
            </div>
            <div className="cart-container-wrapper">
              <div className="cart-container">
                <img
                  className="link-icon1"
                  loading="lazy"
                  alt=""
                  src="/link@2x.png"
                />
                <div className="cart-item-count">
                  <div className="item-count-details">
                    <div className="items1">0 items</div>
                    <div className="div1">(£0.00)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border1">
          <div className="menu-options">
            <a
              className="gift-cards1"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >{`GIFT CARDS & GIFT VOUCHERS`}</a>
            <div className="shop-by-recipient1">SHOP BY RECIPIENT</div>
            <a
              className="shop-by-category1"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >
              SHOP BY CATEGORY
            </a>
            <a
              className="vex-corporate1"
              href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-2"
              target="_blank"
            >
              VEX CORPORATE
            </a>
            <div className="buy-digital-vex1">BUY DIGITAL VEX CARDS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Header1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerTop: PropTypes.any,
  headerPosition: PropTypes.any,
  brandLogoIconPadding: PropTypes.any,
};

export default Header1;
