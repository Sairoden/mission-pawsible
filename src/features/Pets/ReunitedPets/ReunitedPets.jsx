// STYLES
import "./ReunitedPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination } from "../../../ui";

function ReunitedPets() {
  return (
    <div className="reunited-pets-container">
      <PetsBanner
        image="/reunited-pets-banner.png"
        title="Heartwarming Reunion"
        subtitle="Pets Reunited with Their Beloved Owners"
        bannerButton={false}
      />
      <PetsGallery />
      <Pagination total={80} />
    </div>
  );
}

export default ReunitedPets;
