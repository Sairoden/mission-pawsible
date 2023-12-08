// REACT & LIBRARIES
import { Outlet, NavLink } from "react-router-dom";

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
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </NavLink>
        <NavLink to="/lost-pets">LOST PETS</NavLink>
        <NavLink to="/found-pets">FOUND PETS</NavLink>
        <NavLink to="/reunited-pets">REUNITED PETS</NavLink>
        <NavLink to="/resources">RESOURCES</NavLink>
        <NavLink to="/about-us">ABOUT US</NavLink>
        <NavLink to="/contact-us">CONTACT US</NavLink>
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
