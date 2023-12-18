// STYLES
import "./PetsCard.scss";

// UI COMPONENTS
import { Button } from "../index";

function PetsCard({ image, title, gender, date }) {
  return (
    <div className="pets-card">
      <img src={image} alt={title} className="pets-card-image" />
      <h4 className="pets-card-title">{title}</h4>

      <div className="pets-card-subtitle">
        <div className="pets-card-subtitle-content">
          <span className="pets-card-subtitle-heading">Gender:</span>
          <p className="pets-card-subtitle-subheading">{gender}</p>
        </div>

        <div className="pets-card-subtitle-break">⭐</div>

        <div className="pets-card-subtitle-content">
          <span className="pets-card-subtitle-content-heading">Last Seen:</span>
          <p className="pets-card-subtitle-content-subheading">{date}</p>
        </div>
      </div>

      <Button variation="secondary" styles={{ padding: "1vh 2vw" }}>
        MORE INFO
      </Button>
    </div>
  );
}

export default PetsCard;
