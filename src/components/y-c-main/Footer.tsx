import COMLOGO from "../../media/icons/Vector-25.svg";
import LOGO from "../../media/images/logo.svg";
import FBLOGO from "../../media/icons/facebook-icon.svg";
import INLOGO from "../../media/icons/instagram-icon.svg";
import TWLOGO from "../../media/icons/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer-shadow">
        <div className="m-f-s-con"></div>
        <div className="m-f-s-line"></div>
      </div>

      <p>Trusted by fast-growing campanies</p>
      <div className="reliability">
        <div>
          <img src={COMLOGO} alt="company logo" />
          <p>prescryptive</p>
        </div>
        <div>
          <img src={COMLOGO} alt="company logo" />
          <p>prescryptive</p>
        </div>
        <div>
          <img src={COMLOGO} alt="company logo" />
          <p>prescryptive</p>
        </div>
        <div>
          <img src={COMLOGO} alt="company logo" />
          <p>prescryptive</p>
        </div>
        <div>
          <img src={COMLOGO} alt="company logo" />
          <p>prescryptive</p>
        </div>
      </div>

      <section className="main-footer-bottom">
        <div className="m-f-b-links">
          <a href="#">About</a>
          <a href="#">Policy</a>
          <a href="#">Terms</a>
        </div>
        <div className="m-f-b-logo">
          <img src={LOGO} alt="logo" />
          <p>
            Be sure to take a look at our{" "}
            <a href="/">
              Terms of use <br /> and privacy policy
            </a>
          </p>
        </div>
        <div className="m-f-b-media">
          <a href="/">Contact</a>
          <a href="/">
            <img src={FBLOGO} alt="facebook logo" />
          </a>
          <a href="/">
            <img src={INLOGO} alt="instagram logo" />
          </a>
          <a href="/">
            <img src={TWLOGO} alt="twitter logo" />
          </a>
        </div>
      </section>
      <div className="m-f-f">
        <p>
          © Build & Designed by <a href="/">Eden Solution</a> Team . All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
