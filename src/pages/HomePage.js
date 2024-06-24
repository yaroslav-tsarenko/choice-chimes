import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <FrameComponent3 />
      <section className="link-wrapper">
        <img className="link-icon" alt="" src="/link-1@2x.png" />
      </section>
      <FrameComponent2 />
      <section className="banner-content-wrapper">
        <div className="banner-content">
          <img className="link-icon1" alt="" src="/link-2@2x.png" />
          <img
            className="in-a-hurrypng-icon"
            loading="lazy"
            alt=""
            src="/inahurrypng@2x.png"
          />
          <img className="link-icon2" alt="" src="/link-3@2x.png" />
          <img className="link-icon3" alt="" src="/link-4@2x.png" />
          <img className="link-icon4" alt="" src="/link-5@2x.png" />
        </div>
      </section>
      <FrameComponent1 />
      <footer className="footer">
        <div className="footer1">
          <div className="footer-columns-parent">
            <div className="footer-columns">
              <div className="about-column">
                <div className="item-about">About Us</div>
                <div className="about-hemingways">About Hemingways</div>
                <div className="testimonials">Testimonials</div>
                <div className="blog">Blog</div>
                <div className="vex-gift-cards">VEX Gift Cards</div>
                <div className="evouchers">eVouchers</div>
              </div>
              <div className="help-column">
                <h2 className="item-questions">Questions</h2>
                <div className="help-contact">{`Help & Contact`}</div>
                <div className="delivery">Delivery</div>
                <div className="faqs">FAQs</div>
                <div className="how-to-redeem">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="sister-sites-column">
                <h2 className="item-our">Our Sister Gifting Sites</h2>
                <div className="cadbury-gifts-direct">Cadbury Gifts Direct</div>
                <div className="green-blacks">{`Green & Blacks Direct`}</div>
                <div className="business-gifts">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal-column">
                <h2 className="item-legal">Legal Stuff</h2>
                <div className="terms-conditions">{`Terms & Conditions`}</div>
                <div className="privacy-policy">Privacy Policy</div>
                <div className="cookie-policy">Cookie Policy</div>
                <a
                  className="secure-shopping"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact">Contact</div>
                <div className="modern-slavery-statement">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services">
              © 2011 - 2024 Hemingways Marketing Services Ltd, PO Box 93, Ripon,
              North Yorkshire, HG4 1WE    Co Reg. 453174,    Vat No. 169 7254
              24.    Established 1919
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
