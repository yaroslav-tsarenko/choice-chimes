import FrameComponent from "../components/FrameComponent";
import Billing from "../components/Billing";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent checkout="Checkout" />
      <Billing />
      <footer className="footer2">
        <div className="footer3">
          <div className="footer-container">
            <div className="footer-content">
              <div className="about">
                <div className="item-about1">About Us</div>
                <div className="about-hemingways1">About Hemingways</div>
                <div className="testimonials1">Testimonials</div>
                <div className="blog1">Blog</div>
                <div className="vex-gift-cards1">VEX Gift Cards</div>
                <div className="evouchers1">eVouchers</div>
              </div>
              <div className="help">
                <div className="item-questions1">Questions</div>
                <div className="help-contact1">{`Help & Contact`}</div>
                <div className="delivery1">Delivery</div>
                <div className="faqs1">FAQs</div>
                <div className="how-to-redeem1">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="sister-sites">
                <div className="item-our1">Our Sister Gifting Sites</div>
                <div className="cadbury-gifts-direct1">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks1">{`Green & Blacks Direct`}</div>
                <div className="business-gifts1">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal">
                <div className="item-legal1">Legal Stuff</div>
                <div className="terms-conditions1">{`Terms & Conditions`}</div>
                <div className="privacy-policy1">Privacy Policy</div>
                <div className="cookie-policy1">Cookie Policy</div>
                <a
                  className="secure-shopping1"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map1"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact1">Contact</div>
                <div className="modern-slavery-statement1">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services1">
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

export default CheckoutPage;
