// STYLES
import "./LostPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination } from "../../../ui";

function LostPets() {
  return (
    <div className="lost-pets-container">
      <PetsBanner
        image="/lost-pets-banner.png"
        title="Find Your Lost Pet"
        subtitle="We help lost pets and return them back to their owners."
        buttonText="POST YOUR PET"
      />
      <PetsGallery />
      <Pagination total={80} />
    </div>
  );
}

export default LostPets;
