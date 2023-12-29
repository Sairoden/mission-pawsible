// STYLES
import "./RegisteredPetContainer.scss";

// FEATURES COMPONENTS
import { RegisteredPetCards } from "../../index";

// UI COMPONENTS
import { Button } from "../../../ui";

function RegisteredPetContainer({ title }) {
  return (
    <div className="register-gray-container">
      <div className="register_main_content">
        <div className="register-header">
          <h4>{title}</h4>
          <button className="register-btnAdd">
            ADD <span style={{ fontSize: "2rem", fontWeight: "bold" }}>+</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="register-footer-text">No Entry</h3>
      </div>

      <RegisteredPetCards />

      <div className="bottom-content">
        <Button variation="primary" styles={{ padding: "1.5vh 1.5vw" }}>
          SHOW MORE
        </Button>
      </div>
    </div>
  );
}

export default RegisteredPetContainer;
