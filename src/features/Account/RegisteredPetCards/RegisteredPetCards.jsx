// STYLES
import "./RegisteredPetCards.scss";

// FEATURES COMPONENTS
import { RegisteredPetCard } from "../../index";

function RegisteredPetCards() {
  return (
    <div className="register-card-grid">
      <RegisteredPetCard />
      <RegisteredPetCard />
    </div>
  );
}

export default RegisteredPetCards;
