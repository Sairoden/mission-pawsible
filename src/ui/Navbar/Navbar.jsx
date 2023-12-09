// REACT & LIBRARIES
import { Outlet, NavLink } from "react-router-dom";
import {
  HiOutlineSignal,
  HiOutlineTag,
  HiOutlineTrophy,
  HiOutlineHome,
  HiOutlineMegaphone,
  HiOutlineLightBulb,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

// STYLES
import "./Navbar.scss";

// UI COMPONENTS
import { Button } from "../index";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <NavLink to="/">
          <img
            src="logo-mission.png"
            alt="mission pawsible logo"
            className="navbar-logo"
          />
        </NavLink>

        <NavLink
          to="/"
          className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          <HiOutlineHome className="navbar-icon" />
          HOME
        </NavLink>

        <NavLink to="/lost-pets" className="nav-link">
          <HiOutlineTag className="navbar-icon" />
          LOST PETS
        </NavLink>

        <NavLink to="/found-pets" className="nav-link">
          <HiOutlineSignal className="navbar-icon" />
          FOUND PETS
        </NavLink>

        <NavLink to="/reunited-pets" className="nav-link">
          <HiOutlineTrophy className="navbar-icon" />
          REUNITED PETS
        </NavLink>

        <NavLink to="/resources" className="nav-link">
          <HiOutlineSquare3Stack3D className="navbar-icon" />
          RESOURCES
        </NavLink>
        <NavLink to="/about-us" className="nav-link">
          <HiOutlineLightBulb className="navbar-icon" />
          ABOUT US
        </NavLink>

        <NavLink to="/contact-us" className="nav-link">
          <HiOutlineMegaphone className="navbar-icon" />
          CONTACT US
        </NavLink>

        <NavLink to="/login">
          <Button
            variation="primary"
            styles={{
              marginTop: "-5rem",
              padding: "2rem 6rem",
            }}
          >
            LOG IN
          </Button>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
