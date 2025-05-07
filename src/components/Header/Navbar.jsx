import React from "react";
import "./Navbar.css";
import ikigaiLogo from "../../assets/imgs/ikigai_logo.png";

const Navbar = () => {
  return (
    <>
      <section className="toolbar-navibar">
        <div className="logo">
          <img src={ikigaiLogo} className="logo-img" alt="Ikigai logo" />
          <h1>Ikigai</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Ikiverse</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
