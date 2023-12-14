// STYLES
import "./PetsBanner.scss";

// UI COMPONENTS
import { Button } from "../index";

function PetsBanner({ image, title, subtitle, buttonText }) {
  return (
    <div className="pets-banner-container">
      <img
        loading="lazy"
        src={image}
        alt={`${title} banner`}
        className="pets-banner-image"
      />
      <div className="pets-banner-content">
        <div className="pets-banner-text">
          <h1 className="pets-banner-title">{title}</h1>
          <p className="pets-banner-subtitle">{subtitle}</p>

          <Button
            variation="primary"
            icon={true}
            styles={{ padding: "2rem 4rem" }}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PetsBanner;
