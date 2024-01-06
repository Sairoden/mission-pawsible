// STYLES
import "./Landing.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

// ASSETS
import landing from "../../../assets/landing.png";

function Landing() {
  return (
    <section className="landing container">
      <div className="cta">
        <div className="header">
          <h1>
            Make a <span>Pawsitive</span> Change
          </h1>
        </div>

        <div className="body">
          <h4>
            Help bring every paw back home! Start your search now, your furry
            friends can’t wait to see you!
          </h4>
        </div>

        <div className="btns">
          <Button variation="primary" icon={true}>
            Find Pets
          </Button>

          <Button variation="secondary">Join Us</Button>
        </div>
      </div>

      <div className="img">
        <div>
          <img
            src={landing}
            alt="Pet reunion"
            className="landing-image-gallery"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
