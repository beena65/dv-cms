import React from "react";
import "./Sidebar.css";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_img">
          <img
            src="https://dvexcellus.com/wp-content/themes/excellus/images/dv-excellus-logo.jpg"
            alt=""
          />
          <h1>welcome</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar_menu">
        <div className="sidebar_link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar_link" active_menu_link>
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar_link" active_menu_link>
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar_link" active_menu_link>
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar_link" active_menu_link>
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar_link" active_menu_link>
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
