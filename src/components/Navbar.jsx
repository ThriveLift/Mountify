import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

import Logo from "../assets/logo.png";

import "./Navbar.css";

const Navbar = ({ toggleContactForm }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
    document.body.style.overflowX = isMenuVisible ? "visible" : "hidden";
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Reviews", link: "/reviews" },
    { name: "Info", link: "/info" },
  ];

  return (
    <div className="mountify__navbar">
      <div className="mountify__navbar-logo">
        <img src={Logo} alt="Mountify Logo" />
      </div>

      <div className="mountify__navbar-menu_list">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </div>

      <div className="mountify__navbar-mobileMenu">
        <a
          className="custom_button mountify__navbar-mobileMenu_button-outside"
          onClick={toggleContactForm}
        >
          Contact
        </a>

        <button onClick={handleClick} aria-label="Toggle Navigation menu">
          {isMenuVisible ? (
            <CgClose className="mobileMenu-icon" fontSize={42} />
          ) : (
            <CgMenu className="mobileMenu-icon" fontSize={42} />
          )}
        </button>

        <div
          className={`mountify__navbar-mobileMenu_list-container ${
            isMenuVisible ? "showMenu" : "hideMenu"
          }`}
        >
          <ul className="mountify__navbar-mobileMenu_list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
            <li className="mountify__navbar-mobileMenu_button-insde">
              <a className="custom_button" onClick={toggleContactForm}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
