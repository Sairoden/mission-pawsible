// STYLES
import "./RegisteredPetCards.scss";

// FEATURES COMPONENTS
import { RegisteredPetCard } from "../../index";

function RegisteredPetCards({ pets = [] }) {
  return (
    <div className="register-card-grid">
      <RegisteredPetCard pets={pets} />
      <RegisteredPetCard pets={pets} />
    </div>
  );
}

export default RegisteredPetCards;
