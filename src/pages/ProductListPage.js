import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import "./ProductListPage.css";

const ProductListPage = () => {
  return (
    <div className="productlistpage">
      <Header
        headerTop="unset"
        headerPosition="unset"
        logoIconPadding="0px 0px 6.2px"
      />
      <main className="content">
        <section className="main-content">
          <div className="heading-content">
            <h1 className="heading-1">
              Our Full Range of Gift Cards and Vouchers
            </h1>
            <div className="the-gift-vouchers-container">
              <span>
                <p className="the-gift-vouchers">
                  The gift vouchers and gift cards below cover Gift Cards and
                  Vouchers for every interest, every passion and everyone. All
                  gift vouchers are presented in a gift card of
                </p>
                <p className="your-choice">your choice.</p>
              </span>
            </div>
          </div>
          <CardContainer />
        </section>
      </main>
      <footer className="footer8">
        <div className="footer9">
          <div className="footer-links1">
            <div className="footer-columns2">
              <div className="about-column1">
                <div className="item-about4">About Us</div>
                <div className="about-hemingways4">About Hemingways</div>
                <div className="testimonials4">Testimonials</div>
                <div className="blog4">Blog</div>
                <div className="vex-gift-cards4">VEX Gift Cards</div>
                <div className="evouchers4">eVouchers</div>
              </div>
              <div className="help-column1">
                <h2 className="item-questions4">Questions</h2>
                <div className="help-contact4">{`Help & Contact`}</div>
                <div className="delivery4">Delivery</div>
                <div className="faqs4">FAQs</div>
                <div className="how-to-redeem4">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="sister-sites-column1">
                <h2 className="item-our4">Our Sister Gifting Sites</h2>
                <div className="cadbury-gifts-direct4">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks4">{`Green & Blacks Direct`}</div>
                <div className="business-gifts4">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal-column1">
                <h2 className="item-legal4">Legal Stuff</h2>
                <div className="terms-conditions4">{`Terms & Conditions`}</div>
                <div className="privacy-policy4">Privacy Policy</div>
                <div className="cookie-policy4">Cookie Policy</div>
                <a
                  className="secure-shopping4"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map4"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact4">Contact</div>
                <div className="modern-slavery-statement4">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services4">
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

export default ProductListPage;
