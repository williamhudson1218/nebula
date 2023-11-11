import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className={`menu-items ${menuOpen ? "open" : ""}`}>
        <div
          className="menu-item"
          onClick={() => handleMenuItemClick("/my-account")}
        >
          My Account
        </div>
        <div
          className="menu-item"
          onClick={() => handleMenuItemClick("/listings")}
        >
          Book a Stay
        </div>
        <div
          className="menu-item"
          onClick={() => handleMenuItemClick("/create-listing")}
        >
          Create Listing
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </div>
  );
};

export default Navbar;
