// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./ContactUs.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import contactUsImage from "../../../assets/contactUs.png";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <section className="contact-section-container">
      <div className="contact-info-container">
        <div>
          <h2 className="contact-section-title">
            Lost Paws? We’re here to help!
          </h2>
        </div>
        <div>
          <p className="contact-middle-info">
            Reach out and let’s connect! Contact us today to start a
            conversation, <br /> share your thoughts or get the support you
            need. We are here to listen, <br /> assist and make things happen.
          </p>
        </div>
        <div>
          <Button
            variation="primary"
            icon={true}
            size="small"
            onClick={() => {
              navigate("/contact-us");
              scrollTo(0, 0);
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div>
        <img
          src={contactUsImage}
          alt="Contact Us"
          className="contact-section-img"
        />
      </div>
    </section>
  );
}

export default ContactUs;
