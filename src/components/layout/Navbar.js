import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";

const Navbar = () => {
  const [Nav, setNav] = useState({
    menu_class: ""
  });

  const setToggleTopMenuClass = () => {
    if (Nav.menu_class === "") {
      setNav({ menu_class: "toggled" });
    } else {
      setNav({
        menu_class: ""
      });
    }
  };
  
  let top_menu_class = `navbar ${Nav.menu_class}`;

  return (
    <nav className={top_menu_class}>
      <div className="logo">
        <img src={logo} alt="Muses Logo" width="130px" height="auto" />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/calculate">
              Calculate
            </Link>
          </li>
        </ul>
      </div>
      <i
        class="fas fa-align-justify navbar-icon"
        onClick={() => setToggleTopMenuClass()}
      ></i>
      {/* <div className="clear-fix" /> */}
    </nav>
  );
};

export default Navbar;
