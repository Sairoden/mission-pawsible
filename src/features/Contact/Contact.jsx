// STYLES
import "./Contact.scss";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactAnimation from "../../assets/contact-animation.json";

// UI COMPONENTS
import { Button } from "../../ui";

function Contact() {
  return (
    <div className="contact container spacing-t spacing-b">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="contact-animation"
      >
        <Lottie animationData={contactAnimation} />
      </motion.div>

      <div className="info">
        <div className="title">
          <h2>CONTACT US</h2>
        </div>
        <div className="body">
          <p className="text">
            We value your feedback and are here to assist you. Whether you have
            questions, suggestions, or need assistance, our team is ready to
            help.
          </p>
    
          <form
          className="form-content"
          name="contact"
          action="https://formspree.io/f/xnqeapvp"
          method="POST"
        >
          <label id="email" name="email" className="label-text">
            Email
          </label>
          <br />
          <input name="email" id="email" type="email" className="form-input" />
          <br />

          <label id="subject" name="subject" className="label-text">
            Subject
          </label>
          <br />
          <input
            name="subject"
            id="subject"
            type="text"
            className="form-input"
          />
          <br />

          <label id="message" className="label-text">
            Message
          </label>
          <br />
          <textarea name="message" id="message" className="form-textarea" />

          <div className="btns">
          <Button
            variation="primary"
            icon={true}
            type="submit"
          >
            Send
          </Button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
