import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Billing.css";

const Billing = ({ className = "" }) => {
  return (
    <section className={`billing ${className}`}>
      <div className="billing-form-parent">
        <form className="billing-form">
          <div className="billing-content">
            <h2 className="checkout1">Checkout</h2>
            <TextField
              className="header4"
              placeholder="Billing Details"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#bad6eb",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="form-field-block">
              <div className="row-1">
                <TextField
                  className="block-1"
                  placeholder="First Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#fbd66b" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-2"
                  placeholder="Last Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#fbd66b" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
              <div className="row-2">
                <div className="block-11">
                  <div className="company-name">Company Name</div>
                </div>
                <div className="block-21">
                  <div className="country">Country</div>
                  <img className="icon" alt="" src="/icon.svg" />
                </div>
              </div>
              <TextField
                className="row-3"
                placeholder="Street Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#fbd66b" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-22"
                placeholder="Apartment / Suite / Unit / etc. (Optional)"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#fbd66b" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="row-4"
                placeholder="Town / City"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#fbd66b" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-23"
                placeholder="Email Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#fbd66b" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="row-5">
                <TextField
                  className="block-12"
                  placeholder="ZIP"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#fbd66b" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-24"
                  placeholder="Phone"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#fbd66b" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
            </div>
            <div className="billing-separator" />
            <div className="billing-header-items">
              <Button
                className="button3"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#344ead",
                  fontSize: "16",
                  borderColor: "#bad6eb",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#bad6eb" },
                  width: 100,
                  height: 54,
                }}
              >
                Back
              </Button>
              <Button
                className="button4"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#344ead",
                  borderRadius: "4px",
                  "&:hover": { background: "#344ead" },
                  width: 136,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
          <div className="billing-header">
            <div className="checkout-details">
              <TextField
                className="header5"
                placeholder="Checkout Details"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#bad6eb",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="cart-subtotal-parent">
                <div className="cart-subtotal">Cart Subtotal</div>
                <div className="order-detail-values">$360.00</div>
              </div>
              <div className="shipping-handling-parent">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="div2">$0.00</div>
              </div>
              <div className="other-taxes-parent">
                <div className="other-taxes">Other Taxes</div>
                <div className="div3">$0.00</div>
              </div>
              <div className="order-details-separator" />
              <div className="grand-total-parent">
                <div className="grand-total">Grand Total</div>
                <div className="div4">$360.00</div>
              </div>
            </div>
            <div className="transfer-options">
              <div className="header6">
                <div className="transfer-options1">Transfer Options</div>
              </div>
              <div className="checkout-details1">
                <div className="logos-block">
                  <div className="block-13">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <div className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </div>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </div>
                  </div>
                </div>
                <div className="block-3-parent">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <div className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </div>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon1"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="paypal">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout2">
          <TextField
            className="header7"
            placeholder="Checkout"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#bad6eb",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="checkout-details2">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>
            <Button
              className="button5"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#344ead",
                borderRadius: "4px",
                "&:hover": { background: "#344ead" },
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Billing.propTypes = {
  className: PropTypes.string,
};

export default Billing;
