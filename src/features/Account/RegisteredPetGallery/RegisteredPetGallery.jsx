// STYLES
import "./RegisteredPetGallery.scss";

// FEATURES COMPONENTS
import { RegisteredPetCard } from "../../index";

// UTILITIES
import { formatDate } from "../../../utils";

function RegisteredPetGallery({ pets = [] }) {
  return (
    <div className="register-card-grid">
      {pets?.map(pet => (
        <RegisteredPetCard
          key={pet.id}
          id={pet.id}
          image={pet.images[0]}
          title={pet.petName}
          gender={pet.gender}
          date={formatDate(pet.date)}
          isVerified={pet.isVerified}
        />
      ))}
    </div>
  );
}

export default RegisteredPetGallery;
