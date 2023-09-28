import "./CallToAction.css";
import Button from "../UI/Button.jsx";


const CallToAction = () => {
  return (
    <div id="call-to-action_container">
      <div id="call-to-action_content_Wrapper">
        <h4>{`Don't miss out on ABC'c incredible features and Opportunities.`}</h4>
        <h1>Join us Today and unlock your full potential as a creator</h1>
        <div className="button-wrapper">
          <Button gradient={"pink-violet"}>Join Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
