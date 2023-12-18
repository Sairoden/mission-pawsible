// REACT & LIBRARIES
import { useForm } from "react-hook-form";

// STYLES
import "./Contact.scss";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactAnimation from "../../assets/contact-animation.json";

// UI COMPONENTS
import { Button } from "../../ui";

function Contact() {
  // REACT-HOOK-FORM
  const { register, handleSubmit } = useForm();

  const handleContact = data => {
    console.log(data);
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="contact-animation"
      >
        <Lottie animationData={contactAnimation} />
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
        <form
          className="form-content"
          name="contact"
          method="POST"
          data-netlify="true"
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

          <Button
            variation="primary"
            icon={true}
            type="submit"
            styles={{ padding: "2vh 3vw" }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
