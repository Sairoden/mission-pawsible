// STYLES
import "./PetsCard.scss";

// UI COMPONENTS
import { Button } from "../index";

function PetsCard({ image, title, gender, date }) {
  return (
    <div className="pets-card">
      <img loading="lazy" src={image} alt={title} className="image" />
      <div className="header">
      <h4 className="title">{title}</h4>
      </div>

      <div className="body">
        <div className="gender">
          <h4 className="main">Gender:</h4>
          <h3 className="sub">{gender}</h3>
        </div>

        <div className="breaker">⭐</div>

        <div className="time">
          <span className="main">Last Seen:</span>
          <p className="sub">{date}</p>
        </div>
      </div>

      <Button variation="secondary" styles={{ padding: "1vh 2vw" }}>
        MORE INFO
      </Button>
    </div>
  );
}

export default PetsCard;
