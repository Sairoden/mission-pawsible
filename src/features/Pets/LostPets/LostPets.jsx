// STYLES
import "./LostPets.scss";

// UI COMPONENTS
import { Button } from "../../../ui";

function LostPets() {
  return (
    <div className="lost-pets-container">
      <div className="pets-banner-container">
        <img
          src="/lost-pets-banner.png"
          alt="lost-pets banner"
          className="pets-banner-image"
        />
        <div className="pets-banner-content">
          <div className="pets-banner-text">
            <h1 className="pets-banner-title">Find Your Lost Pet</h1>
            <p className="pets-banner-subtitle">
              We help lost pets and return them back to their owners.
            </p>
          </div>

          <Button
            variation="primary"
            icon={true}
            styles={{ padding: "2rem 4rem" }}
          >
            POST YOUR PET
          </Button>
        </div>
      </div>

      <div className="pets-filter-container">
        <h1>FILTER</h1>
      </div>
    </div>
  );
}

<div
  style={{
    width: "100%",
    height: "100%",
    opacity: 0.4,
    mixBlendMode: "multiply",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.13) 0%, black 100%, rgba(217, 217, 217, 0) 100%)",
  }}
/>;

export default LostPets;
