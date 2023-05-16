import React from "react";
import "../stylesheets/Navbar.css";
import { LogoIcon } from "../icons/Logo";
import { DropdownIcon } from "../icons/DropdownIcon";
import { SearchIcon } from "../icons/SearchIcon";

const Navbar = () => {
  return (
    <header className="navbar-main">
      <nav className="navbar-container">
        <div className="navbar-left-container">
          <div className="logo-container">
            <LogoIcon />
          </div>
          <div className="navbar-course-container">
            <p>Courses</p>
            <div>
              <DropdownIcon />
            </div>
          </div>
          <div className="navbar-program-container">
            <p>Programes</p>
            <div>
              <DropdownIcon />
            </div>
          </div>
        </div>
        <div className="navbar-right-container">
          <div className="navbar-search">
            <SearchIcon />
          </div>
          <div>
            <p>Login</p>
          </div>
          <div className="navbar-login-container">
            <button>JOIN NOW</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
