/* eslint-disable react/no-unknown-property */
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

  const handleContact = e => {
    e.preventDefault();
    const myForm = e.target;

    const formData = new FormData(myForm);

    console.log(formData);

    // console.log(data);
    // const formData = new FormData(data);

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => console.log("Form successfully submitted"))
    //   .catch(error => alert(error));
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
        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        {/* <form className="form-content" name="contact" onSubmit={handleContact}>
          <label id="email" name="email" className="label-text">
            Email
          </label>
          <br />

          <input
            name="email"
            id="email"
            type="email"
            className="form-input"
            {...register("email")}
          />
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
            {...register("subject")}
          />
          <br />

          <label id="message" className="label-text">
            Message
          </label>
          <br />

          <textarea
            name="message"
            id="message"
            className="form-textarea"
            {...register("message")}
          />

          <Button
            variation="primary"
            icon={true}
            type="submit"
            styles={{ padding: "2vh 3vw" }}
          >
            Send
          </Button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
