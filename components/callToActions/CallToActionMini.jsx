import "./CallToActionMini.css"

import Button from "../UI/Button";


const CallToActionMini = () => {
  return (
    <div id="call-to-action-mini_container" className="backgroundColor">
      <h2>Join the ABC Community</h2>
      <div>
        <p>{`Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform. Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.`}</p>
      </div>
      <div id="mini" className="button-wrapper"><Button gradient={"pink-violet"}>Earn Now</Button></div>
    </div>
  );
};

export default CallToActionMini;
