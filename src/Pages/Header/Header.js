import React from "react";
import "./Header.css";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <header className="header py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="Logo" className="header-image mt-2 mb-2 w-50" />
        </div>
        <div>
          <a href="#login" className="btn custom-btn-outline me-2">
            Contact
          </a>
          <a href="#login" className="btn custom-btn-outline me-2">
            Menue
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
