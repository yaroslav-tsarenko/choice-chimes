import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Dashboard.css";

const Dashboard = ({ className = "" }) => {
  return (
    <section className={`dashboard ${className}`}>
      <div className="dashboard-content">
        <div className="dashboard-info">
          <div className="your-dashboard">Your Dashboard</div>
          <TextField
            className="header2"
            placeholder="Your Active Downloads"
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
          <div className="download-renewal">
            <div className="dashboard-header">
              <div className="renewal-date">
                <div className="wrapper-cards">
                  <img
                    className="cards-icon"
                    loading="lazy"
                    alt=""
                    src="/cards@2x.png"
                  />
                </div>
                <div className="card-name">
                  <div className="panorma-presents-gift">
                    {" "}
                    Panorma Presents Gift Card
                  </div>
                </div>
                <div className="download-items">
                  <div className="download-credit-details">$100.00</div>
                  <div className="credits">12 Credits</div>
                </div>
              </div>
              <div className="download-credits">
                <div className="up-time">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="download-item">
                <div className="renewal-info">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className="renewal-date1">
                  <div className="renewal-icons">
                    <div className="next-renewal-parent">
                      <div className="next-renewal">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancellation">
                    <div className="cancel">Cancel</div>
                    <div className="renew-action">
                      <div className="renewal-date2">
                        <img
                          className="icons-block1"
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="download-renewal-child" />
          </div>
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details">
            <div className="header-wrapper">
              <TextField
                className="header3"
                placeholder="User Details"
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
            <div className="checkout-fields">
              <div className="checkout-data">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
            </div>
            <div className="checkout-fields1">
              <div className="checkout-field-details">
                <div className="email-address">Email Address</div>
                <div className="darnellroobhotmailcom">
                  Darnell.Roob@hotmail.com
                </div>
              </div>
            </div>
            <div className="checkout-fields2">
              <div className="plan-parent">
                <div className="plan">Plan</div>
                <div className="basic">Basic</div>
              </div>
            </div>
            <div className="checkout-fields3">
              <div className="expiry-date-parent">
                <div className="expiry-date">Expiry Date</div>
                <div className="april-20241">24 April, 2024</div>
              </div>
            </div>
            <div className="checkout-fields4">
              <div className="auto-renewal-parent">
                <div className="auto-renewal">Auto Renewal</div>
                <div className="on">On</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
