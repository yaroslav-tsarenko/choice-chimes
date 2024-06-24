import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details3 ${className}`}>
      <div className="order-summary">
        <TextField
          className="header9"
          placeholder="Checkout Details"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#1c1c1c",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
      </div>
      <div className="checkout-totals">
        <div className="subtotal-values">
          <div className="cart-subtotal1">Cart Subtotal</div>
          <div className="grand-total-label">$360.00</div>
        </div>
      </div>
      <div className="shipping-details">
        <div className="shipping-costs">
          <div className="cost-breakdown">
            <div className="shipping-handling1">{`Shipping & Handling`}</div>
            <div className="other-taxes1">Other Taxes</div>
          </div>
          <div className="other-tax-labels">
            <div className="div5">$0.00</div>
            <div className="div6">$0.00</div>
          </div>
        </div>
      </div>
      <div className="total-separator">
        <div className="company-info" />
      </div>
      <div className="subtotal-summary">
        <div className="grand-total-group">
          <div className="grand-total1">Grand Total</div>
          <div className="div7">$360.00</div>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
