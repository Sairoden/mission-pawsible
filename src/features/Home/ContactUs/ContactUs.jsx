// STYLES
import "./ContactUs.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="container">
        <div className="info">
          <div className="header">
            <h2 className="title">Lost Paws? We’re here to help!</h2>
          </div>

          <div className="body">
            <p className="text">
              Reach out and let’s connect! Contact us today to start a
              conversation, share your thoughts or get the support you need.
              We’re here to listen, assist and make things happen.
            </p>

            {/* <div className="btns">
              <div className="button bg-orange">
                <h5>Contact Us</h5>
              </div>
            </div> */}

            <Button
              variation="primary"
              icon={true}
              styles={{ padding: "1.4rem 3rem" }}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="img">
          <img src="/img-contact.png" alt="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
