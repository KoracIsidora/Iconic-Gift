import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <label style={{ fontSize: "2rem" }}>Contact me:</label>
        <a href="https://www.instagram.com/iconic.gift/">
          <img
            src={instagram}
            alt="Instagram"
            className="img-fluid"
            style={{ width: "3rem", height: "3rem" }}
          />
        </a>
        <a href="https://www.facebook.com/andrikonic">
          <img
            src={facebook}
            alt="Instagram"
            className="img-fluid"
            style={{ width: "3rem", height: "3rem" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/andrijana-ikonic/">
          <img
            src={linkedin}
            alt="Instagram"
            className="img-fluid"
            style={{ width: "3rem", height: "3rem" }}
          />
        </a>
      </div>
      {/* <label>&copy; KoraDesign 2020</label> */}
    </footer>
  );
};

export default Footer;
