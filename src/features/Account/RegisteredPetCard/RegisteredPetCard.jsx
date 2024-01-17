// STYLES
import "./RegisteredPetCard.scss";

import shitsu from "../../../assets/shitsu.png";

function RegisteredPetCard() {
  return (
    <div className="register-middle-container">
      <div className="middle-img-container">
        <img src={shitsu} alt="shitsupic" className="register-img" />
      </div>
      <div>
        <div className="register-h3">
          <h3 className="register-h3-text">MO5-POODLE TINY YELLOW</h3>
        </div>
        <div className="register-span-container">
          <span className="span-text">Gender: male</span>
          <span className="span-text">Last seen: Nov 12, 2020</span>
        </div>
        <div className="register-button-container">
          <button className="update-btn">UPDATE</button>
          <button className="listing-btn">CLOSE LISTING</button>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPetCard;
