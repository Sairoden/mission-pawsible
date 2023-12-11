// STYLES
import "./LostPets.scss";

// UI COMPONENTS

function LostPets() {
  return (
    <div className="lost-pets-container">
      <div className="pets-banner">
        <img src="/lost-pets-banner.png" alt="lost-pets banner" />
        <div className="pets-banner-text">
          <h1>Find Your Lost Pet</h1>
          <p>We help lost pets and return them back to their owners.</p>
          <button className="pets-banner-button">
            Post your Lost Pet{" "}
            <img
              src="/paw.svg"
              alt="paw icon"
              className="pets-banner-button-icon"
            />
          </button>
        </div>
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
