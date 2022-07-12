import React from "react";
import "./styles/Footer.css";
import InstagramIcon from "./assets/Instagram-Icon.png";
import FacebookIcon from "./assets/facebook-icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="#">Facebook</a><br />
        <a href="#">Instagram</a><br />
        <a href="#">Twitter</a>
      </div>
      <p>Valb Fitness&reg;</p>
      <p>Avenida Goiás, 1305, Centro, 35.540-032</p>
    </div>
  );
}

export default Footer;