// REACT & LIBRARIES
import { useNavigate } from "react-router-dom";

// STYLES
import "./RegisteredPetContainer.scss";

// FEATURES COMPONENTS
import { RegisteredPetCards } from "../../index";

// UI COMPONENTS
import { Button } from "../../../ui";

function RegisteredPetContainer({ title, pets = [] }) {
  const navigate = useNavigate();

  return (
    <div className="register-gray-container">
      <div className="register_main_content">
        <div className="register-header">
          <h4>{title}</h4>
          <button
            className="register-btnAdd"
            onClick={() => navigate("/report")}
          >
            ADD <span style={{ fontSize: "2rem", fontWeight: "bold" }}>+</span>
          </button>
        </div>
      </div>

      <div className="register-middle-content">
        <div>
          <h3 className="register-footer-text">No Entry</h3>
        </div>

        <RegisteredPetCards pets={pets} />

        <div className="bottom-content">
          <Button variation="primary">SHOW MORE</Button>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPetContainer;
