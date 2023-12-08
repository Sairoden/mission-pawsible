// STYLES
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
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
          <img src="/paw.svg" alt="paw" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
