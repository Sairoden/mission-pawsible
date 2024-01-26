import { Link } from "react-router-dom";

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
        <Link key={pet.id} to={`/pet/${pet.id}`}>
          <RegisteredPetCard
            id={pet.id}
            image={pet.images[0]}
            title={pet.petName}
            gender={pet.gender}
            date={formatDate(pet.date)}
            isVerified={pet.isVerified}
          />
        </Link>
      ))}
    </div>
  );
}

export default RegisteredPetGallery;
