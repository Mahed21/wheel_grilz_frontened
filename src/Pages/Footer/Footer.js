import React from "react";
import "./Footer.css";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="d-flex justify-content-center pt-2 pb-2">
        <div className="row justify-content-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle"
            style={{ width: "200px", height: "180px" }}
          />
          <p className="footer_text text-center">
            Grillz on Wheelz started the journey in 2013
          </p>
          <NavLink className="navlink-text text-center" to="/security" href="">
            admin
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
