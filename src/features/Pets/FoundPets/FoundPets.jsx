// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./FoundPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetFoundPets } from "../../../hooks";

// UTILITIES
import { PETS_PAGE_SIZE } from "../../../utils";

function FoundPets() {
  const { foundPets, count, isPending } = useGetFoundPets();
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const indexOfLastPet = currentPage * PETS_PAGE_SIZE;
  const indexOfFirstPet = indexOfLastPet - PETS_PAGE_SIZE;

  const newFoundPets = foundPets?.slice(indexOfFirstPet, indexOfLastPet);

  if (isPending) return <Spinner />;

  return (
    <div className="found-pets-container spacing-t">
      <PetsBanner
        image="foundPetsBanner"
        title="Reunite A Found Pet"
        subtitle="Helping Pets Find Their Way Home"
      />
      <PetsGallery pets={newFoundPets} loading={isPending} total={count} />
      <Pagination total={count} pageSize={PETS_PAGE_SIZE} />
    </div>
  );
}

export default FoundPets;
