import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header1 from "../components/Header1";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header1 />
      <section className="login-form-container-parent">
        <div className="login-form-container">
          <div className="sign-in">
            <div className="sign-in-heading">
              <div className="sign-in-title">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials">
                <FormControl
                  className="input-fields"
                  variant="standard"
                  sx={{
                    borderColor: "#fbd66b",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "Lora",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "11px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/input-containers.svg"
                        style={{ marginRight: "11px" }}
                      />
                    )}
                  >
                    <MenuItem>Username</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <TextField
                  className="input-fields1"
                  placeholder="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="16px" height="16px" src="/frame-153-1.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#fbd66b" },
                    "& .MuiInputBase-root": {
                      height: "40px",
                      backgroundColor: "#fff",
                      paddingRight: "15px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#344ead",
                    borderRadius: "4px",
                    "&:hover": { background: "#344ead" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-sign-in">
                <img
                  className="social-buttons-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <footer className="footer2">
        <div className="footer3">
          <div className="footer-links-parent">
            <div className="footer-links1">
              <div className="item-about-us-parent">
                <div className="item-about1">About Us</div>
                <div className="about-hemingways1">About Hemingways</div>
                <div className="testimonials1">Testimonials</div>
                <div className="blog1">Blog</div>
                <div className="vex-gift-cards1">VEX Gift Cards</div>
                <div className="evouchers1">eVouchers</div>
              </div>
              <div className="item-questions-parent">
                <h3 className="item-questions1">Questions</h3>
                <div className="help-contact1">{`Help & Contact`}</div>
                <div className="delivery1">Delivery</div>
                <div className="faqs1">FAQs</div>
                <div className="how-to-redeem1">
                  How to Redeem a VEX Gift Card
                </div>
              </div>
              <div className="item-our-sister-gifting-site-parent">
                <h3 className="item-our1">Our Sister Gifting Sites</h3>
                <div className="cadbury-gifts-direct1">
                  Cadbury Gifts Direct
                </div>
                <div className="green-blacks1">{`Green & Blacks Direct`}</div>
                <div className="business-gifts1">{`Business Gifts & Incentives`}</div>
              </div>
              <div className="item-legal-stuff-parent">
                <h3 className="item-legal1">Legal Stuff</h3>
                <div className="terms-conditions1">{`Terms & Conditions`}</div>
                <div className="privacy-policy1">Privacy Policy</div>
                <div className="cookie-policy1">Cookie Policy</div>
                <a
                  className="secure-shopping1"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4612"
                  target="_blank"
                >
                  Secure Shopping
                </a>
                <a
                  className="site-map1"
                  href="https://www.figma.com/design/U54QmQx8ceeTe2NIhDzDxj?node-id=1-4821"
                  target="_blank"
                >
                  Site Map
                </a>
                <div className="contact1">Contact</div>
                <div className="modern-slavery-statement1">
                  Modern Slavery Statement
                </div>
              </div>
            </div>
            <div className="hemingways-marketing-services1">
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

export default SignInPage;
