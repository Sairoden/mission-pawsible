// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./RegisteredPetCard.scss";

function RegisteredPetCard({ id, title, gender, date, image, isVerified }) {
  const navigate = useNavigate();

  console.log(isVerified);

  return (
    <div>
      <div className="register-middle-container">
        <div className="ribbon-container">
          {!isVerified && <div className="ribbon">Pending</div>}
        </div>
        <div className="middle-img-container">
          <img src={image} alt="shitsupic" className="register-img" />
        </div>
        <div>
          <div className="register-h3">
            <h3 className="register-h3-text">{title}</h3>
          </div>
          <div className="register-span-container">
            <span className="span-text">Gender: {gender}</span>
            <span className="span-text">Last seen: {date}</span>
          </div>
          <div className="register-button-container">
            <button
              className="update-btn"
              onClick={() => navigate(`/editPet/${id}`)}
            >
              UPDATE
            </button>
            <button className="listing-btn">CLOSE LISTING</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPetCard;
