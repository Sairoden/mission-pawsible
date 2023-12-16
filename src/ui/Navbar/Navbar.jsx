// REACT & LIBRARIES
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

// UI COMPONENTS
import { Button } from "../index";

// HOOKS
import { useGetCurrentUser } from "../../hooks";

// ASSETS
import logo from "../../assets/logo-mission.png";

const Navbar = () => {
  const { user } = useGetCurrentUser();

  return (
    <nav className="navbar-container">
      <NavLink to="/">
        <img src={logo} alt="mission pawsible logo" className="navbar-logo" />
      </NavLink>

      <NavLink
        to="/"
        className={`nav-link ${({ isActive }) => (isActive ? "active" : "")}`}
      >
        <HiOutlineHomeModern className="navbar-icon" />
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

      {!user ? (
        <NavLink to="/login">
          <Button
            variation="primary"
            styles={{
              padding: "2rem 6rem",
            }}
          >
            LOG IN
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/account">
          <Button
            variation="primary"
            styles={{
              padding: "2vh 2vw",
            }}
          >
            ACCOUNT
          </Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
