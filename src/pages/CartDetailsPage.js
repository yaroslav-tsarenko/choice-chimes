import FrameComponent from "../components/FrameComponent";
import ProductRow from "../components/ProductRow";
import CheckoutDetails from "../components/CheckoutDetails";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent
        checkout="Your Cart"
        frameDivOverflowX="auto"
        logoImageIconPadding="6.2px 0px 0px"
      />
      <section className="cart-items">
        <div className="panorma-card-title">
          <ProductRow />
          <CheckoutDetails />
        </div>
      </section>
      <footer className="footer4">
        <div className="footer5">
          <div className="footer-columns1">
            <div className="footer-column-container">
              <div className="item-about-us-parent">
                <div className="item-about2">About Us</div>
                <div className="about-hemingways2">About Hemingways</div>
                <div className="testimonials2">Testimonials</div>
                <div className="blog2">Blog</div>
                <div className="vex-gift-cards2">VEX Gift Cards</div>
                <div className="evouchers2">eVouchers</div>
              </div>
              <div className="item-questions-parent">
                <h3 className="item-questions2">Questions</h3>
                <div className="help-contact2">{`Help & Contact`}</div>
                <div className="delivery2">Delivery</div>
                <div className="faqs2">FAQs</div>
                <div className="how-to-redeem2">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="item-our-sister-gifting-site-parent">
                <h3 className="item-our2">Our Sister Gifting Sites</h3>
                <div className="cadbury-gifts-direct2">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks2">{`Green & Blacks Direct`}</div>
                <div className="business-gifts2">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="item-legal-stuff-parent">
                <h3 className="item-legal2">Legal Stuff</h3>
                <div className="terms-conditions2">{`Terms & Conditions`}</div>
                <div className="privacy-policy2">Privacy Policy</div>
                <div className="cookie-policy2">Cookie Policy</div>
                <a
                  className="secure-shopping2"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map2"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact2">Contact</div>
                <div className="modern-slavery-statement2">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services2">
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

export default CartDetailsPage;
