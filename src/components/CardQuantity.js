import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CardQuantity.css";

const CardQuantity = ({
  className = "",
  panormaPresentsGiftCard,
  divider,
  propMinWidth,
}) => {
  const dividerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`card-quantity ${className}`}>
      <div className="hourly-details" />
      <div className="plus-button">
        <div className="wrapper-cards">
          <img className="cards-icon" alt="" src="/cards-1@2x.png" />
        </div>
        <div className="gift-card">
          <div className="panorma-presents-gift">{panormaPresentsGiftCard}</div>
        </div>
        <div className="price-details">
          <div className="divider" style={dividerStyle}>
            {divider}
          </div>
        </div>
        <div className="checkout-button">
          <div className="quantity-increase-parent">
            <div className="quantity-increase">
              <img className="icon-plus1" alt="" src="/iconplus.svg" />
            </div>
            <div className="checkout-title">1</div>
            <input className="quantity-decrease" type="checkbox" />
          </div>
          <FormControl
            className="parent"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#1c1c1c",
              borderRadius: "8px",
              width: "53.170731707317074%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Lora",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="success" />
            <Select
              color="success"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="company-logo">$10.11</div>
      </div>
    </div>
  );
};

CardQuantity.propTypes = {
  className: PropTypes.string,
  panormaPresentsGiftCard: PropTypes.string,
  divider: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default CardQuantity;
