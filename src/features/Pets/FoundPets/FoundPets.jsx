// STYLES
import "./FoundPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination } from "../../../ui";

// HOOKS
import { useGetFoundPets } from "../../../hooks";

function FoundPets() {
  const { foundPets, count, isPending } = useGetFoundPets();

  return (
    <div className="found-pets-container">
      <PetsBanner
        image="/found-pets-banner.png"
        title="Reunite A Found Pet"
        subtitle="Helping Pets Find Their Way Home"
      />
      <PetsGallery pets={foundPets} loading={isPending} total={count} />
      <Pagination total={80} />
    </div>
  );
}

export default FoundPets;
