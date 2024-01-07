// STYLES
import "./ContactUs.scss";
import { NavLink } from "react-router-dom";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import contactUsImage from "../../../assets/contactUs.png";

function ContactUs() {
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
          <NavLink to="/contact-us">
            <Button variation="primary" icon={true} size="small">
              Contact Us
            </Button>
          </NavLink>
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
    // <section className="contact-us">
    //   <div className="container">
    //     <div className="info">
    //       <div className="header">
    //         <h2 className="title">Lost Paws? We’re here to help!</h2>
    //       </div>

    //       <div className="body">
    //         <p className="text">
    //           Reach out and let’s connect! Contact us today to start a
    //           conversation, share your thoughts or get the support you need.
    //           We’re here to listen, assist and make things happen.
    //         </p>
    //         <div className="btns">
    //           <Button
    //             variation="primary"
    //             icon={true}
    //           >
    //             Contact Us
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="img">
    //       <img src="/img-contact.png" alt="Contact Us" />
    //     </div>
    //   </div>
    // </section>
  );
}

export default ContactUs;
