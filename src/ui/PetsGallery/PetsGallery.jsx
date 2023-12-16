// STYLES
import "./PetsGallery.scss";

// UI COMPONENTS
import { PetsFilter, PetsCards, PetsCard, Spinner } from "../index";

// UTILITIES
import { formatDate } from "../../utils";

function PetsGallery({ pets, loading, total }) {
  if (loading) return <Spinner />;

  console.log(pets);

  return (
    <div className="pets-gallery">
      <PetsFilter />

      <PetsCards total={total}>
        {pets?.map(pet => (
          <PetsCard
            key={pet.id}
            image={pet.images[0]}
            title={pet.petName}
            gender={pet.gender}
            date={formatDate(pet.date)}
          />
        ))}
      </PetsCards>
    </div>
  );
}

export default PetsGallery;
