import React from "react";
import "./Navbar.css";
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar_left">
        <a href="">welcome</a>
      </div>
      <div className="navbar_right">
        <a href="">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="">
          <img width="30" src="" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
