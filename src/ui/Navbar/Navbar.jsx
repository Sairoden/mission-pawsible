// REACT & LIBRARIES
import { Outlet, NavLink } from "react-router-dom";

// STYLES
import "./Navbar.scss";

// UI COMPONENTS
import Btn from "../button/Btn.jsx";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/logo-mission.png" alt="mission-pawsible logo" />
        </div>
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
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
            <Btn class="bg-orange" text="LOGIN" />
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
