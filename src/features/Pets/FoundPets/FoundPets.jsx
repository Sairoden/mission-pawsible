// STYLES
import "./FoundPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination } from "../../../ui";

function FoundPets() {
  return (
    <div className="found-pets-container">
      <PetsBanner
        image="/found-pets-banner.png"
        title="Reunite A Found Pet"
        subtitle="Helping Pets Find Their Way Home"
      />
      <PetsGallery />
      <Pagination total={80} />
    </div>
  );
}

export default FoundPets;
