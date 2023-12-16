// STYLES
import "./LostPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetLostPets } from "../../../hooks";

function LostPets() {
  const { lostPets, isPending, count } = useGetLostPets();

  if (isPending) return <Spinner />;

  return (
    <div className="lost-pets-container">
      <PetsBanner
        image="/lost-pets-banner.png"
        title="Find Your Lost Pet"
        subtitle="We help lost pets and return them back to their owners"
      />
      <PetsGallery pets={lostPets} loading={isPending} total={count} />
      <Pagination total={80} />
    </div>
  );
}

export default LostPets;
