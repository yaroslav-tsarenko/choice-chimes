import Header1 from "../components/Header1";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import "./CancellationPolicyPage.css";

const CancellationPolicyPage = () => {
  return (
    <div className="cancellationpolicypage">
      <Header1 />
      <div className="content">
        <h1 className="cancellation-policy">Cancellation Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="cancellation-policy1">
        <div className="lilylamb-kids-we1">
          This Cancellation Policy outlines the terms and conditions regarding
          the cancellation of gift card purchases from [Your Gift Card Website].
          By purchasing a gift card from our website, you agree to the terms of
          this cancellation policy. Please read it carefully.
        </div>
        <FrameComponent1
          cookiesUsedOnOurWebsite="General Cancellation Policy"
          firstPartyCookies="1.1 No Cancellations"
          ourWebsiteUsesFirstPartyC="Once a gift card has been purchased from [Your Gift Card Website], the sale is considered final. Gift card purchases cannot be canceled and are non-refundable, except where required by law. Please ensure that all details are correct before completing your purchase."
          thirdPartyCookies="1.2 Exceptions"
          weUseThirdPartyCookiesPro="In certain exceptional circumstances, and at the sole discretion of [Your Company], a cancellation request may be considered. These circumstances include, but are not limited to, technical errors during the purchase process or unauthorized transactions. Any decision to allow a cancellation is made on a case-by-case basis and is final."
          propHeight="unset"
          propLetterSpacing="unset"
          propDisplay="unset"
        />
        <FrameComponent1
          cookiesUsedOnOurWebsite=" Eligibility for Cancellations"
          firstPartyCookies="2.1 Unauthorized Transactions"
          ourWebsiteUsesFirstPartyC="If you believe that a gift card purchase was made without your authorization, you must contact our customer support team immediately. Unauthorized transactions may be eligible for cancellation if reported promptly. You may be required to provide documentation or evidence supporting your claim."
          thirdPartyCookies="2.2 Technical Errors"
          weUseThirdPartyCookiesPro="If you experience a technical error during the purchase process that results in an incorrect charge or duplicate charge, you may be eligible for a cancellation. Please contact our customer support team with the details of the error, including any relevant transaction IDs or screenshots."
          propHeight="66px"
          propLetterSpacing="-0.01px"
          propDisplay="inline-block"
        />
        <div className="cancellation-request">
          <h1 className="cancellation-request-process-container">
            <ol className="cancellation-request-process">
              <li>Cancellation Request Process</li>
            </ol>
          </h1>
          <FrameComponent2 />
        </div>
        <FrameComponent1
          cookiesUsedOnOurWebsite="Special Cases"
          firstPartyCookies="4.1 Incorrect Amounts Loaded"
          ourWebsiteUsesFirstPartyC="If an incorrect amount was loaded onto your gift card due to an error, you may be eligible for a cancellation of the incorrect amount or an adjustment to the correct value. Please contact our customer support team with the details of the error."
          thirdPartyCookies="4.2 Lost or Stolen Gift Cards"
          weUseThirdPartyCookiesPro="Lost or stolen gift cards are generally not eligible for cancellation. Users are responsible for safeguarding their gift cards and treating them like cash. In certain circumstances, a replacement card may be issued at the discretion of [Your Company], but this does not constitute a cancellation."
          propHeight="unset"
          propLetterSpacing="unset"
          propDisplay="unset"
        />
        <FrameComponent1
          cookiesUsedOnOurWebsite="Non-Cancellable Items"
          firstPartyCookies="5.1 Promotional and Bonus Cards"
          ourWebsiteUsesFirstPartyC="Promotional or bonus gift cards received as part of a promotion or special offer are not eligible for cancellation. These cards have no cash value and cannot be exchanged for cash or other gift cards."
          thirdPartyCookies="5.2Partially Used Gift Cards"
          weUseThirdPartyCookiesPro="Gift cards that have been partially used are not eligible for cancellation of the remaining balance. Once a gift card has been used, it cannot be returned or exchanged."
          propHeight="unset"
          propLetterSpacing="unset"
          propDisplay="unset"
        />
        <FrameComponent1
          cookiesUsedOnOurWebsite="Merchant Cancellations"
          firstPartyCookies="6.1 Product Returns"
          ourWebsiteUsesFirstPartyC="If you return a product purchased with a gift card to a participating merchant, the return will be processed according to the merchant’s return policy. The merchant may issue a credit to the gift card or provide a store credit, but this is not managed by [Your Company]."
          thirdPartyCookies="6.2 Disputes with Merchants"
          weUseThirdPartyCookiesPro="Any disputes regarding purchases made with a gift card should be resolved directly with the merchant. [Your Company] is not responsible for resolving disputes related to merchant transactions."
          propHeight="unset"
          propLetterSpacing="unset"
          propDisplay="unset"
        />
        <div className="contact-information-group">
          <h1 className="contact-information2">
            <ol className="contact-information3">
              <li>Contact Information</li>
            </ol>
          </h1>
          <div className="if-you-have-container1">
            <p className="if-you-have1">
              If you have any questions or concerns about this Cancellation
              Policy, please contact us at:
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="brandname-customer-support1">
              BrandName Customer Support
            </p>
            <p className="email-supportbrandnamecom1">
              Email: support@brandname.com
            </p>
            <p className="phone-1-800-123-45671">Phone: +1-800-123-4567</p>
            <p className="address-123-main1">
              Address: 123 Main Street, Suite 456, City, Country, ZIP Code
            </p>
          </div>
        </div>
      </main>
      <footer className="footer4">
        <div className="footer5">
          <div className="footer-column-parent">
            <div className="footer-column">
              <div className="about1">
                <div className="item-about2">About Us</div>
                <div className="about-hemingways2">About Hemingways</div>
                <div className="testimonials2">Testimonials</div>
                <div className="blog2">Blog</div>
                <div className="vex-gift-cards2">VEX Gift Cards</div>
                <div className="evouchers2">eVouchers</div>
              </div>
              <div className="help1">
                <h3 className="item-questions2">Questions</h3>
                <div className="help-contact2">{`Help & Contact`}</div>
                <div className="delivery2">Delivery</div>
                <div className="faqs2">FAQs</div>
                <div className="how-to-redeem2">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="sister-sites">
                <h3 className="item-our2">Our Sister Gifting Sites</h3>
                <div className="cadbury-gifts-direct2">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks2">{`Green & Blacks Direct`}</div>
                <div className="business-gifts2">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="legal1">
                <h3 className="item-legal2">Legal Stuff</h3>
                <div className="terms-conditions2">{`Terms & Conditions`}</div>
                <div className="privacy-policy2">Privacy Policy</div>
                <div className="cookie-policy3">Cookie Policy</div>
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

export default CancellationPolicyPage;
