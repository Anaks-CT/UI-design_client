import "./CallToAction2.css"

import Button from "../UI/Button";
import CallToActionMini from "./CallToActionMini";


const CallToAction2 = () => {
  return (
    <div id="emoji-banner">
      <div id="banner" />
      <div id="emoji-banner-gradient" />
      <h2>
        Ready to Cash in Your Connections? <br /> Join Our Affiliate Program
      </h2>
      <div>
        <h4>
          Join now and get <span className="purple-text-gradient">7.5%</span>{" "}
          commission on all creator referrals for the entire year.
        </h4>
      </div>
      <div id="" className="button-wrapper" style={{ marginTop: "35px" }}>
        <Button gradient={"pink-violet"}>Earn Now</Button>
      </div>
      <CallToActionMini />
    </div>
  );
};

export default CallToAction2;
