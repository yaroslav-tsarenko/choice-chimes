import FrameComponent from "../components/FrameComponent";
import Dashboard from "../components/Dashboard";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent />
      <Dashboard />
      <footer className="footer">
        <div className="footer1">
          <div className="footer-links">
            <div className="about-parent">
              <div className="about">
                <div className="item-about">About Us</div>
                <div className="about-hemingways">About Hemingways</div>
                <div className="testimonials">Testimonials</div>
                <div className="blog">Blog</div>
                <div className="vex-gift-cards">VEX Gift Cards</div>
                <div className="evouchers">eVouchers</div>
              </div>
              <div className="help">
                <h3 className="item-questions">Questions</h3>
                <div className="help-contact">{`Help & Contact`}</div>
                <div className="delivery">Delivery</div>
                <div className="faqs">FAQs</div>
                <div className="how-to-redeem">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="corporate">
                <h3 className="item-our">Our Sister Gifting Sites</h3>
                <div className="cadbury-gifts-direct">Cadbury Gifts Direct</div>
                <div className="green-blacks">{`Green & Blacks Direct`}</div>
                <div className="business-gifts">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal">
                <h3 className="item-legal">Legal Stuff</h3>
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

export default AccountPage;
