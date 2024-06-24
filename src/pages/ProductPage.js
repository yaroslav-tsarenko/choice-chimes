import { Button } from "@mui/material";
import Header from "../components/Header";
import Recommendations from "../components/Recommendations";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <Header />
      <section className="page-content">
        <div className="product-info-parent">
          <div className="product-info">
            <div className="product-details">
              <div className="product-image">
                <div className="product-image-child" />
                <img
                  className="image-4-icon"
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className="tags">
                  <img
                    className="emoji-lightning-symbol"
                    alt=""
                    src="/-emoji-lightning-symbol.svg"
                  />
                  <b className="best-seller">Best Seller</b>
                </div>
              </div>
              <div className="key-features-versatile-container">
                <span>
                  <p className="key-features">Key Features:</p>
                  <p className="blank-line">&nbsp;</p>
                  <ul className="versatile-usage-redeemable-at">
                    <li className="versatile-usage-redeemable-at1">
                      <span className="versatile-usage-redeemable">
                        Versatile Usage: Redeemable at a vast selection of
                        popular retailers, both online and in-store, ensuring
                        the recipient finds exactly what they want.
                      </span>
                    </li>
                    <li className="flexible-amounts-available-in">
                      <span className="flexible-amounts-available">
                        Flexible Amounts: Available in various denominations,
                        allowing you to choose the perfect amount to fit your
                        budget.
                      </span>
                    </li>
                    <li className="easy-to-purchase-quick-and-si">
                      <span className="easy-to-purchase">
                        Easy to Purchase: Quick and simple to buy online, with
                        the option to send directly to the recipient’s email for
                        instant delivery or as a beautifully packaged physical
                        card.
                      </span>
                    </li>
                    <li className="no-expiry-date-use-the-gift-c">
                      <span className="no-expiry-date">
                        No Expiry Date: Use the gift card at your convenience
                        with no pressure, as it never expires.
                      </span>
                    </li>
                    <li className="personalized-touch-include-a">
                      <span className="personalized-touch-include">
                        Personalized Touch: Include a personalized message to
                        add a heartfelt touch to your gift.
                      </span>
                    </li>
                  </ul>
                  <p className="why-choose-our">
                    Why Choose Our Universal Gift Card?
                  </p>
                  <p className="our-universal-gift">
                    Our Universal Gift Card is the perfect choice for those who
                    value flexibility and convenience. Whether it's for a picky
                    friend or a family member who seems to have everything, our
                    gift card ensures they can pick out something they truly
                    love. Plus, with no expiration date and the ability to use
                    it across a wide range of retailers, it offers unmatched
                    versatility.
                  </p>
                  <p className="how-it-works">How It Works:</p>
                  <ol className="select-your-amount-choose-fro">
                    <li className="select-your-amount-choose-fro1">
                      <span className="select-your-amount">
                        Select Your Amount: Choose from various denominations to
                        suit your needs.
                      </span>
                    </li>
                    <li className="add-a-personal-message-includ">
                      <span className="add-a-personal">
                        Add a Personal Message: Include a heartfelt message to
                        make your gift extra special.
                      </span>
                    </li>
                    <li className="choose-delivery-method-opt-fo">
                      <span className="choose-delivery-method">
                        Choose Delivery Method: Opt for email delivery for
                        instant gratification or a physical card for a
                        traditional touch.
                      </span>
                    </li>
                    <li className="enjoy-the-joy-of-giving-sit-b">
                      <span className="enjoy-the-joy">
                        Enjoy the Joy of Giving: Sit back and relax, knowing
                        you’ve given a gift that anyone will appreciate.
                      </span>
                    </li>
                  </ol>
                  <p className="perfect-for">Perfect For:</p>
                  <ul className="birthdays-anniversaries-weddin">
                    <li className="birthdays">
                      <span className="birthdays1">Birthdays</span>
                    </li>
                    <li className="anniversaries">
                      <span className="anniversaries1">Anniversaries</span>
                    </li>
                    <li className="weddings">
                      <span className="weddings1">Weddings</span>
                    </li>
                    <li className="graduations">
                      <span className="graduations1">Graduations</span>
                    </li>
                    <li className="holidays">
                      <span className="holidays1">Holidays</span>
                    </li>
                    <li className="thank-you-gifts">
                      <span className="thank-you-gifts1">Thank You Gifts</span>
                    </li>
                    <li>
                      <span className="corporate-gifts">{`Corporate Gifts `}</span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="gift-description">
              <div className="the-perfect-gift">
                The Perfect Gift for Any Occasion
              </div>
              <h1 className="universal-gift-card">Universal Gift Card</h1>
              <div className="gift-spacing">$150</div>
              <div className="surprise-your-loved">
                Surprise your loved ones with the ultimate gift of choice! Our
                Universal Gift Card offers the perfect solution for any
                celebration, from birthdays and anniversaries to holidays and
                special milestones. Let your friends and family choose exactly
                what they want with a gift card that can be used at a wide range
                of popular stores and online retailers.
              </div>
              <div className="quantity-selector">
                <div className="quantity">Quantity</div>
                <div className="quantity-buttons">
                  <img
                    className="icon-plus"
                    loading="lazy"
                    alt=""
                    src="/iconplus1.svg"
                  />
                  <div className="quantity-spacing">3</div>
                  <img
                    className="icon-minus"
                    loading="lazy"
                    alt=""
                    src="/iconminus.svg"
                  />
                </div>
              </div>
              <Button
                className="button"
                endIcon={<img width="24px" height="24px" src="/iconbag.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#344ead",
                  borderRadius: "32px",
                  "&:hover": { background: "#344ead" },
                  width: 235,
                  height: 60,
                }}
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <div className="gift-alternatives">
            <div className="alternative-products">
              <div className="alternative-header">
                <div className="heading-4">Alternative Gift Ideas</div>
                <div className="alternative-options">
                  <div className="ms-gift-cards-">{`M&S Gift Cards - The UK's leading fashion and   retailer with an emphasis on Quality and Value.`}</div>
                  <div className="department-store-gift">{`Department Store Gift Vouchers - Gift Vouchers & Gift Cards covering the UK's most recognisable high street brands`}</div>
                </div>
              </div>
              <img
                className="link-icon5"
                loading="lazy"
                alt=""
                src="/link-11@2x.png"
              />
            </div>
            <div className="product-buttons">
              <Button
                className="button1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "4px",
                  "&:hover": { background: "#000" },
                  width: 100,
                  height: 54,
                }}
              >
                Back
              </Button>
              <Button
                className="button2"
                startIcon={
                  <img width="24px" height="24px" src="/tag-icon.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#d93a19",
                  borderRadius: "4px",
                  "&:hover": { background: "#d93a19" },
                  width: 205,
                  height: 56,
                }}
              >
                Buy Gift Card
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Recommendations />
      <footer className="footer6">
        <div className="footer7">
          <div className="footer-links">
            <div className="link-columns">
              <div className="about-links">
                <div className="item-about3">About Us</div>
                <div className="about-hemingways3">About Hemingways</div>
                <div className="testimonials3">Testimonials</div>
                <div className="blog3">Blog</div>
                <div className="vex-gift-cards3">VEX Gift Cards</div>
                <div className="evouchers3">eVouchers</div>
              </div>
              <div className="help-links">
                <h3 className="item-questions3">Questions</h3>
                <div className="help-contact3">{`Help & Contact`}</div>
                <div className="delivery3">Delivery</div>
                <div className="faqs3">FAQs</div>
                <div className="how-to-redeem3">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="sister-sites1">
                <h3 className="item-our3">Our Sister Gifting Sites</h3>
                <div className="cadbury-gifts-direct3">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks3">{`Green & Blacks Direct`}</div>
                <div className="business-gifts3">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal-links">
                <h3 className="item-legal3">Legal Stuff</h3>
                <div className="terms-conditions3">{`Terms & Conditions`}</div>
                <div className="privacy-policy3">Privacy Policy</div>
                <div className="cookie-policy3">Cookie Policy</div>
                <a
                  className="secure-shopping3"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map3"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact3">Contact</div>
                <div className="modern-slavery-statement3">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services3">
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

export default ProductPage;
