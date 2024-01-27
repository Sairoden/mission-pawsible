// REACT & LIBRARIES
import { useNavigate, Link } from "react-router-dom";

// STYLES
import "./RegisteredPetCard.scss";

function RegisteredPetCard({ id, title, gender, date, image, isVerified }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="register-middle-container">
        <div className="ribbon-container">
          {!isVerified && <div className="ribbon">Pending</div>}
        </div>
        <Link to={`/pet/${id}`}>
          <div className="middle-img-container">
            <img src={image} alt="shitsupic" className="register-img" />
          </div>
        </Link>
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
              onClick={() => {
                scrollTo(0, 0);
                navigate(`/editPet/${id}`);
              }}
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
