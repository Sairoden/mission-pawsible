// REACT & LIBRARIES
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// STYLES
import "./Navbar.scss";
import {
  HiOutlineSignal,
  HiOutlineTag,
  HiOutlineTrophy,
  HiOutlineHomeModern,
  HiOutlineMegaphone,
  HiOutlineLightBulb,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import logo from "../../assets/logo-mission.png";

// UI COMPONENTS
import { Button } from "../index";

// HOOKS
import { useGetCurrentUser } from "../../hooks";

const Navbar = () => {
  const { user } = useGetCurrentUser();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-container");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

    setIsActive(false);
  };

  const handleToggleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });

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

          <NavLink to="/" className="nav-link" onClick={handleNavItemClick}>
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
              <Button
                variation="primary"
                size="small"
                className="navbar-button"
              >
                LOG IN
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/account" onClick={handleNavItemClick}>
              <Button
                variation="primary"
                size="small"
                className="navbar-button"
              >
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
