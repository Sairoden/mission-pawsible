// STYLES
import "./ReunitedPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination } from "../../../ui";

// HOOKS
import { useGetReunitedPets } from "../../../hooks";

function ReunitedPets() {
  const { reunitedPets, count, isPending } = useGetReunitedPets();

  return (
    <div className="reunited-pets-container">
      <PetsBanner
        image="reunitedPetsBanner"
        title="Heartwarming Reunion"
        subtitle="Pets Reunited with Their Beloved Owners"
        bannerButton={false}
      />
      <PetsGallery pets={reunitedPets} loading={isPending} total={count} />
      <Pagination total={80} />
    </div>
  );
}

export default ReunitedPets;
