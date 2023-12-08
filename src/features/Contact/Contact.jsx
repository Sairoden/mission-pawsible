// STYLES
import "./Contact.scss";
import pawSvg from "../../../public/paw.svg";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Contact_animation from "../../../public/Contact-animation.json";

function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="contact-animation"
      >
        <Lottie animationData={Contact_animation} />
      </motion.div>

      <div className="Header-container">
        <div>
          <h1 className="header-text">CONTACT US</h1>
        </div>
        <div>
          <p className="description-text">
            We value your feedback and are here to assist you. Whether you have
            questions, suggestions, or need assistance, our team is ready to
            help.
          </p>
        </div>
      </div>
      <div className="form-container">
        <form className="form-content">
          <label className="label-text">Email</label>
          <br />
          <input type="text" className="form-input" />
          <br />
          <label className="label-text">Subject</label>
          <br />
          <input type="text" className="form-input" />
          <br />
          <label className="label-text">Message</label>
          <br />
          <textarea className="form-textarea" />
          <br />
        </form>
      </div>
      <div className="footer-section">
        {" "}
        <div className="form-btn">Send</div>
        <div>
          <img src={pawSvg} alt="pawIcon" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
