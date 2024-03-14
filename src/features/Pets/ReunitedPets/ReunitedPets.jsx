// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

// STYLES
import "./ReunitedPets.scss";

// UI COMPONENTS
import { PetsBanner, PetsGallery, Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetReunitedPets } from "../../../hooks";

// UTILITIES
import { PETS_PAGE_SIZE } from "../../../utils";

function ReunitedPets() {
  const { reunitedPets, count, isPending } = useGetReunitedPets();
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const indexOfLastPet = currentPage * PETS_PAGE_SIZE;
  const indexOfFirstPet = indexOfLastPet - PETS_PAGE_SIZE;

  const newReunitedPets = reunitedPets
    ?.sort((a, b) => b.id - a.id)
    ?.slice(indexOfFirstPet, indexOfLastPet);

  if (isPending) return <Spinner />;

  return (
    <div className="reunited-pets-container spacing-t">
      <PetsBanner
        image="reunitedPetsBanner"
        title="Heartwarming Reunion"
        subtitle="Pets Reunited with Their Beloved Owners"
        bannerButton={false}
      />
      <PetsGallery pets={newReunitedPets} loading={isPending} total={count} />
      <Pagination total={count} pageSize={PETS_PAGE_SIZE} />
    </div>
  );
}

export default ReunitedPets;
