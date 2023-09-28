import "./SignupForm.css";

import Button from "../UI/Button";
import visibilitySwitch from "../../assets/visibility_off.svg";
import expandMoreToggle from "../../assets/expand_more.svg";
import Image from "next/image";

const SignupForm = () => {
  return (
    <form id="signup">
      <div id="input-wrapper">
        <input type="text" className="textbox" placeholder="First Name*" />
        <input type="text" className="textbox" placeholder="Last Name*" />
      </div>
      <input type="text" className="textbox" placeholder="Email*" />
      <div className="relative_position">
        <input type="text" className="textbox" placeholder="Password*" />
        {/* <img id="visibility-toggle" src={visibilitySwitch} alt="visibility" /> */}
        <Image id="visibility-toggle" src={visibilitySwitch} alt="visibility" />
      </div>
      <div className="flex-between">
        <p>(GMT+05.30) India standard Time - Calcutta</p>
        {/* <img id="expand-icon" src={expandMoreToggle} alt="expand more" /> */}
        <Image id="expand-icon" src={expandMoreToggle} alt="expand more" />
      </div>
      <div className="signup-button-wrapper">
        <Button gradient={"violet-gradient"}>Signup as a user</Button>
      </div>
      <p>
        By signing up you agree to our Terms & Conditions and Privacy Policy.
        and confirm that you are at least 18 years of old.
      </p>
      <div id="signup-seperator">
        <hr className="line" />
        <span>OR</span>
        <hr className="line" />
      </div>
      <div className="signup-button-wrapper">
        <Button gradient={"violet-pink"}>Signup as a creator</Button>
      </div>
      <p id="signup-form_login">
        Already have an account? <span>Login</span>
      </p>
    </form>
  );
};

export default SignupForm;
