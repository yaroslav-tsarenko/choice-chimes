import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={`contact-form ${className}`}>
      <div className="contact-information-group">
        <div className="contact-information4">Contact Information</div>
        <div className="form-field">
          <input className="form-label" placeholder="Email" type="text" />
          <img className="icon" alt="" src="/icon.svg" />
        </div>
      </div>
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="frame-parent4">
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="form-field-parent">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fbd66b" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#fbd66b" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fbd66b" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#fbd66b" },
            }}
          />
        </div>
      </div>
      <div className="carholder-name-parent">
        <div className="carholder-name">Carholder Name</div>
        <div className="form-field4">
          <input
            className="name-on-card"
            placeholder="Name on Card"
            type="text"
          />
          <img className="icon2" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon3" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="frame-parent5">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-form-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button1"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
