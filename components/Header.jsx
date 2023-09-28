import "./Header.css"

import Button from "./UI/Button";
import expand from "../assets/expand_more_white.svg";
import burger from "../assets/burger.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div id="header-container">
      <h2>LOGO</h2>
      <div id="navlist-container">
        <div>
          <span>Home</span>
        </div>
        <div>
          <p>About Us</p>
        </div>
        <div>
          <p>Our Blog</p>
        </div>
        <div>
          <p>Support</p>
        </div>
        <div>
          <p>Affiliate</p>
        </div>
        <div>
          <p>Pograms</p>
          {/* <img src={expand} alt="expand" /> */}
          <Image src={expand} alt="expand" />
        </div>
      </div>
      {/* <img id="header-burger" src={burger} alt="" /> */}
      <Image id="header-burger" src={burger} alt="" />
      <div id="header-button-wrapper">
        <p>Login</p>
        <Button gradient={"violet-pink"}>Signup</Button>
      </div>
    </div>
  );
};

export default Header;
