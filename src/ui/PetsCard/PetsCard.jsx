// STYLES
import "./PetsCard.scss";

// UI COMPONENTS
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function PetsCard({ id, image, title, gender, date }) {
  const navigate = useNavigate();

  const handleInfo = () => {
    navigate(`/pet/${id}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pet-card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <div className="header">
          <h3 className="main">{title}</h3>
        </div>

        <div className="body">
          <div className="gender">
            <h5 className="main">Gender:</h5>
            <h5 className="sub">{gender}</h5>
          </div>

          <div className="breaker">
            <h4>⭐</h4>
          </div>

          <div className="time">
            <h5 className="main">Last Seen:</h5>
            <h5 className="sub">{date}</h5>
          </div>
        </div>

        <div className="btns">
          <Button variation="secondary" onClick={handleInfo}>
            MORE INFO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PetsCard;
