import React from "react";
import "./Header.css";

const Navbar: React.FC = ({}) => {
  const handleLogout = () => {};

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Q Game" />
      </div>
      <div className="navbar-user">
        <span>Hello</span>
        <div className="navbar-dropdown">
          <button className="dropbtn">Profile</button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a onClick={handleLogout}>Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
