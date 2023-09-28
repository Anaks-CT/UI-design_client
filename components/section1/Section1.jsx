import "./Section1.css"


import GoogleSVG from "../UI/GoogleSVG";
import SignupForm from "./SignupForm";

const Section1 = () => {
  return (
    <div id="section1-container">
      <div>
        <h1>{`A Creator's Paradise`}</h1>
        <h2>Were Creativity Meets Success</h2>
      </div>
      <div id="signup-container">
        <div id="google-button-wrapper">
          <div id="googleSVG-wrapper">
            <GoogleSVG />
          </div>{" "}
          Continue With Google
        </div>
        <hr className="line" />
        <SignupForm />
      </div>
    </div>
  );
};

export default Section1;
