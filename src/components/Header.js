import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-area">
          <Link to="/" className="logo">
            Logo
            <img src={logo} alt="logo" />
          </Link>

          <NavBar />

          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
