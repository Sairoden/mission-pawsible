// STYLES
import "./Footer.scss";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// ASSETS
import logo from "../../assets/logo-mission.png";

function Footer() {
  return (
    <footer className="footer-container">
      <a href="#" className="footer-logo">
        <img
          loading="lazy"
          src={logo}
          alt="mission-pawsible logo"
          className="logo"
        />
      </a>

      <div className="footer-main">
        <a href="https://www.ciit.edu.ph/" target="_blank" rel="noreferrer">
          <h4 className="footer-text">CIIT College of Arts and Technology</h4>
        </a>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className="social-media" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="social-media" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <RiTwitterXFill className="social-media" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube className="social-media" />
          </a>
        </div>
      </div>

      <hr className="footer-line" />

      <h4 className="footer-copyright">
        © 2023 Mission Pawsible - All Rights Reserved
      </h4>
    </footer>
  );
}

export default Footer;
