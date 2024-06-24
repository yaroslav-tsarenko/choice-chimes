import PropTypes from "prop-types";
import "./ContactSupport.css";

const ContactSupport = ({ className = "" }) => {
  return (
    <div className={`contact-support ${className}`}>
      <div className="contact-support-steps">
        <h3 className="contact-customer-support">
          3.1 Contact Customer Support
        </h3>
        <div className="to-request-a-container">
          <p className="to-request-a">
            To request a refund, contact our customer support team at [Email] or
            [Phone Number]. Provide the following information:
          </p>
          <p className="blank-line2">&nbsp;</p>
          <ul className="your-name-and-contact-informat">
            <li className="your-name-and">Your name and contact information</li>
            <li className="the-gift-card">
              The gift card number and purchase details
            </li>
            <li>A detailed explanation of the reason for the refund request</li>
          </ul>
        </div>
      </div>
      <div className="contact-support-steps1">
        <h3 className="review-and-processing">3.2 Review and Processing</h3>
        <div className="our-customer-support">
          Our customer support team will review your refund request and may ask
          for additional information or documentation. Refund requests are
          typically processed within [X] business days. You will be notified of
          the outcome of your request via email.
        </div>
      </div>
      <div className="contact-support-steps2">
        <h3 className="approved-refunds">3.2 Approved Refunds</h3>
        <div className="if-your-refund">
          If your refund request is approved, the refund will be processed using
          the original payment method used for the purchase. The time it takes
          for the refund to be credited to your account may vary depending on
          your bank or payment provider.
        </div>
      </div>
    </div>
  );
};

ContactSupport.propTypes = {
  className: PropTypes.string,
};

export default ContactSupport;
