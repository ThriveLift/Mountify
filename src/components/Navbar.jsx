import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenu, CgClose } from "react-icons/cg";

import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="mountify__navbar roboto-regular">
      <div className="mountify__navbar-logo">
        <img src={logo} alt="" width={275} />
      </div>

      <nav>
        <ul className="mountify__navbar-menu_list hidden nunito-sans-d">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
          <li>
            <a href="">Info</a>
          </li>
        </ul>

        <a className="mountify__navbar-contactButton custom_button" href="">
          Contact
        </a>

        <div className="mountify__navbar-mobileMenu">
          <button onClick={handleClick}>
            {isMenuVisible ? (
              <CgClose className="mobileMenu-icon" fontSize={42} />
            ) : (
              <CgMenu className="mobileMenu-icon" fontSize={42} />
            )}
          </button>

          <ul
            id="hideMenu"
            className={`mountify__navbar-mobileMenu_list ${
              isMenuVisible ? "showMenu" : "hideMenu"
            } mobile_menu-bg_color`}
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Info</a>
            </li>
            <div className="mountify__navbar-mobileMenu-contactButton">
              <a className="custom_button wobble-hor-bottom ">Contact</a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
