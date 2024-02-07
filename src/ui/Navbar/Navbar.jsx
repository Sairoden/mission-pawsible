import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineSignal,
  HiOutlineTag,
  HiOutlineTrophy,
  HiOutlineHomeModern,
  HiOutlineMegaphone,
  HiOutlineLightBulb,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { Button } from "../index";
import { useGetCurrentUser } from "../../hooks";
import logo from "../../assets/logo-mission.png";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useGetCurrentUser();
  const [isActive, setIsActive] = useState(false);

  const handleNavItemClick = () => {
    setIsActive(false); // Close the navigation menu when a navigation item is clicked
  };

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar-container ${isActive ? "active" : ""}`}>
      <input
        type="checkbox"
        className="toggler"
        checked={isActive}
        onChange={handleToggleClick}
      />
      <div className="hamburger">
        <div className="hamburger-cross"></div>
      </div>

      <div className="menu">
        <div className="header">
          <NavLink to="/" onClick={handleNavItemClick}>
            <img
              src={logo}
              alt="mission pawsible logo"
              className="navbar-logo"
            />
          </NavLink>

          <NavLink
            to="/"
            className={`nav-link ${isActive ? "active" : ""}`}
            onClick={handleNavItemClick}
          >
            <HiOutlineHomeModern className="navbar-icon" />
            HOME
          </NavLink>

          <NavLink
            to="/lost-pets"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineTag className="navbar-icon" />
            LOST PETS
          </NavLink>

          <NavLink
            to="/found-pets"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineSignal className="navbar-icon" />
            FOUND PETS
          </NavLink>

          <NavLink
            to="/reunited-pets"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineTrophy className="navbar-icon" />
            REUNITED PETS
          </NavLink>

          <NavLink
            to="/resources"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineSquare3Stack3D className="navbar-icon" />
            RESOURCES
          </NavLink>

          <NavLink
            to="/about-us"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineLightBulb className="navbar-icon" />
            ABOUT US
          </NavLink>

          <NavLink
            to="/contact-us"
            className="nav-link"
            onClick={handleNavItemClick}
          >
            <HiOutlineMegaphone className="navbar-icon" />
            CONTACT US
          </NavLink>

          {!user ? (
            <NavLink to="/login" onClick={handleNavItemClick}>
              <Button variation="primary" size="small">
                LOG IN
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/account" onClick={handleNavItemClick}>
              <Button variation="primary" size="small">
                ACCOUNT
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
