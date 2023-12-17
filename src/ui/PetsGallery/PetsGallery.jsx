// STYLES
import "./PetsGallery.scss";

// UI COMPONENTS
import { PetsFilter, PetsCards, PetsCard, Spinner } from "../index";

// UTILITIES
import { formatDate } from "../../utils";

function PetsGallery({ pets = [], loading, total = 0 }) {
  if (loading) return <Spinner />;

  return (
    <div className="pets-gallery">
      <PetsFilter />

      <PetsCards total={total}>
        {pets.length > 1 ? (
          pets?.map(pet => (
            <PetsCard
              key={pet.id}
              image={pet.images[0]}
              title={pet.petName}
              gender={pet.gender}
              date={formatDate(pet.date)}
            />
          ))
        ) : (
          <h3>No pets currently 🐕</h3>
        )}
      </PetsCards>
    </div>
  );
}

export default PetsGallery;
