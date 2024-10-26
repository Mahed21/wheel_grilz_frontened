import React from "react";
import "./Header.css";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left side text or icon */}
        <div className="header-left">
          <p className="header-text">Welcome to Grillz on Wheelz</p>
        </div>

        {/* Centered Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="header-logo animate-logo" />
        </div>

        {/* Right side text or icon */}
        <div className="header-right">
          <p className="header-text">Delicious Meals Delivered</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
