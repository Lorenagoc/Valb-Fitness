import React from "react";
import "./styles/Footer.css";
import InstagramIcon from "./assets/Instagram-Icon.png";
import FacebookIcon from "./assets/facebook-icon.png";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;