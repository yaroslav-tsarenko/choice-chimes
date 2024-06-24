import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  checkout,
  frameDivOverflowX,
  logoImageIconPadding,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      overflowX: frameDivOverflowX,
    };
  }, [frameDivOverflowX]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: logoImageIconPadding,
    };
  }, [logoImageIconPadding]);

  return (
    <section className={`header-parent ${className}`}>
      <header className="header2">
        <div className="header3">
          <div className="background1" style={backgroundStyle}>
            <div className="free-presentation-card-with-ev-wrapper">
              <div className="free-presentation-card-container1">
                <span>FREE</span>
                <span className="presentation-card-with1">
                  {" "}
                  presentation card with every order
                </span>
              </div>
            </div>
            <div className="delivery-from-250-wrapper">
              <div className="delivery-from-2501">Delivery from £2.50</div>
            </div>
            <div className="login1">
              <a
                className="login2"
                href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-416"
                target="_blank"
              >
                Login
              </a>
              <div className="register1">Register</div>
            </div>
          </div>
          <div className="link14" />
          <div className="link15" />
          <div className="logo-container-wrapper">
            <div className="logo-container1">
              <div className="logo1">
                <div className="logo-wrapper">
                  <div className="logo-image-container" style={frameDivStyle}>
                    <img
                      className="logo-image-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="choice-chimes1">Choice Chimes</div>
                </div>
              </div>
              <div className="search">
                <div className="container2">
                  <div className="input3" />
                  <div className="input4">
                    <div className="container3">
                      <div className="im-looking-for1">I'm looking for...</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info12">
                <div className="call-us-parent">
                  <div className="call-us1">{`Call us `}</div>
                  <div className="space">0371 3845931</div>
                </div>
              </div>
              <div className="cart">
                <div className="cart-link1">
                  <img
                    className="link-icon7"
                    loading="lazy"
                    alt=""
                    src="/link@2x.png"
                  />
                  <div className="cart-item">
                    <div className="items-parent">
                      <div className="items1">0 items</div>
                      <div className="div1">(£0.00)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border1">
            <div className="navigation-links">
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
      </header>
      <div className="frame-wrapper">
        <div className="checkout-label-parent">
          <div className="checkout-label">
            <h1 className="checkout">{checkout}</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,

  /** Style props */
  frameDivOverflowX: PropTypes.any,
  logoImageIconPadding: PropTypes.any,
};

export default FrameComponent;
