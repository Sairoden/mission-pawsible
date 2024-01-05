// STYLES
import "./RegisteredPetGallery.scss";

// FEATURES COMPONENTS
import { RegisteredPetCard } from "../../index";

function RegisteredPetGallery({ pets = [] }) {
  return (
    <div className="register-card-grid">
      <RegisteredPetCard pets={pets} />
      <RegisteredPetCard pets={pets} />
    </div>
  );
}

export default RegisteredPetGallery;
