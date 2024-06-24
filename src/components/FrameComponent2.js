import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`hero-content-wrapper ${className}`}>
      <div className="hero-content">
        <div className="weve-got-a-huge-range-of-gift-wrapper">
          <h1 className="weve-got-a">{`We've got a huge range of gift cards & gift vouchers`}</h1>
        </div>
        <div className="hero-button">
          <Button
            className="input2"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              borderRadius: "3px",
              "&:hover": { background: "#000" },
              width: 161.7,
              height: 30,
            }}
          >
            View Full Range
          </Button>
          <div className="product-grid">
            <div className="product-rows">
              <div className="product-borders">
                <img
                  className="border-icon"
                  loading="lazy"
                  alt=""
                  src="/border@2x.png"
                />
              </div>
              <div className="product-info-group">
                <div className="product-info1">
                  <div className="info">Info</div>
                </div>
                <div className="link2">
                  <div className="buy">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows1">
              <div className="border-wrapper">
                <img className="border-icon1" alt="" src="/border-1@2x.png" />
              </div>
              <div className="frame-parent">
                <div className="info-wrapper">
                  <div className="info1">Info</div>
                </div>
                <div className="link3">
                  <div className="buy1">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows2">
              <div className="border-container">
                <img className="border-icon2" alt="" src="/border-2@2x.png" />
              </div>
              <div className="frame-group">
                <div className="info-container">
                  <div className="info2">Info</div>
                </div>
                <div className="link4">
                  <div className="buy2">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows3">
              <img className="border-icon3" alt="" src="/border-3@2x.png" />
              <div className="frame-container">
                <div className="info-frame">
                  <div className="info3">Info</div>
                </div>
                <div className="link5">
                  <div className="buy3">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows4">
              <div className="border-frame">
                <img className="border-icon4" alt="" src="/border-4@2x.png" />
              </div>
              <div className="frame-div">
                <div className="info-wrapper1">
                  <div className="info4">Info</div>
                </div>
                <div className="link6">
                  <div className="buy4">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows5">
              <div className="border-wrapper1">
                <img className="border-icon5" alt="" src="/border-5@2x.png" />
              </div>
              <div className="frame-parent1">
                <div className="info-wrapper2">
                  <div className="info5">Info</div>
                </div>
                <div className="link7">
                  <div className="buy5">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows6">
              <div className="border-wrapper2">
                <img className="border-icon6" alt="" src="/border-6@2x.png" />
              </div>
              <div className="frame-parent2">
                <div className="info-wrapper3">
                  <a
                    className="info6"
                    href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-623"
                    target="_blank"
                  >
                    Info
                  </a>
                </div>
                <div className="link8">
                  <a
                    className="buy6"
                    href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-623"
                    target="_blank"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-rows7">
              <div className="border-wrapper3">
                <img className="border-icon7" alt="" src="/border-7@2x.png" />
              </div>
              <div className="frame-parent3">
                <div className="info-wrapper4">
                  <div className="info7">Info</div>
                </div>
                <div className="link9">
                  <div className="buy7">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows8">
              <img className="border-icon8" alt="" src="/border-8@2x.png" />
              <div className="frame-parent4">
                <div className="info-wrapper5">
                  <div className="info8">Info</div>
                </div>
                <div className="link10">
                  <div className="buy8">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows9">
              <div className="border-wrapper4">
                <img className="border-icon9" alt="" src="/border-9@2x.png" />
              </div>
              <div className="frame-parent5">
                <div className="info-wrapper6">
                  <div className="info9">Info</div>
                </div>
                <div className="link11">
                  <div className="buy9">Buy</div>
                </div>
              </div>
            </div>
            <div className="product-rows10">
              <div className="border-wrapper5">
                <img className="border-icon10" alt="" src="/border-10@2x.png" />
              </div>
              <div className="frame-parent6">
                <div className="info-wrapper7">
                  <a
                    className="info10"
                    href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4222"
                    target="_blank"
                  >
                    Info
                  </a>
                </div>
                <div className="link12">
                  <a
                    className="buy10"
                    href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4222"
                    target="_blank"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="product-rows11">
              <div className="border-wrapper6">
                <img className="border-icon11" alt="" src="/border-11@2x.png" />
              </div>
              <div className="frame-parent7">
                <div className="info-wrapper8">
                  <div className="info11">Info</div>
                </div>
                <div className="link13">
                  <div className="buy11">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
