import "./Footer.css"

import facebook from "../assets/facebookIcon.svg";
import twitter from "../assets/twitterIcon.svg";
import instagram from "../assets/instagramIcon.svg";
import youtube from "../assets/youtubeIcon.svg";
import Image from "next/image";

const Footer = () => {
  const icons = [facebook, twitter, instagram, youtube];
  return (
    <div id="footer-container">
      <h1>LOGO</h1>
      <div>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Support</p>
        <p>Blog</p>
        <p>Login</p>
        <p>Signup</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h3>Programs</h3>
        <p>Affiliate Program</p>
        <p>Ambassdor Program</p>
        <p>Partnership Program</p>
      </div>
      <div>
        <h3>Policy</h3>
        <p>Legal</p>
        <p>DMCA</p>
        <p>USC 2257</p>
        <p>Privacy Policy</p>
        <p id="tc-desktop">Terms and Conditions</p>
        <p id="tc-mobile">T & C</p>
      </div>
      <div>
        <h3 id="follow-us_text">Follow Us</h3>
        <div>
          {icons.map((icon) => (
            // <img key={icon} src={icon} alt="icon" width={35} />
            <Image key={icon} src={icon} alt="icon" width={35} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
