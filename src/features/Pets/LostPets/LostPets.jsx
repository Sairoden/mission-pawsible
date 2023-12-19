// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./LostPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetLostPets } from "../../../hooks";

// UTILITIES
import { PETS_PAGE_SIZE } from "../../../utils";

function LostPets() {
  const { lostPets, isPending, count } = useGetLostPets();
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const indexOfLastPet = currentPage * PETS_PAGE_SIZE;
  const indexOfFirstPet = indexOfLastPet - PETS_PAGE_SIZE;

  const newLostPets = lostPets?.slice(indexOfFirstPet, indexOfLastPet);

  if (isPending) return <Spinner />;

  return (
    <div className="lost-pets-container">
      <PetsBanner
        image="lostPetsBanner"
        title="Find Your Lost Pet"
        subtitle="We help lost pets and return them back to their owners"
      />
      <PetsGallery pets={newLostPets} loading={isPending} total={count} />
      <Pagination total={count} pageSize={PETS_PAGE_SIZE} />
    </div>
  );
}

export default LostPets;
