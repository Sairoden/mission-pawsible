// STYLES
import "./PetsGallery.scss";

// UI COMPONENTS
import { PetsFilter, PetsCards, PetsCard, Spinner } from "../index";

// UTILITIES
import { formatDate } from "../../utils";
import { useState } from "react";

function PetsGallery({ pets = [], loading, total = 0 }) {
  const [petTypes, setPetTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [locations, setLocations] = useState([]);

  if (petTypes.length > 0) {
    pets = pets.filter(pet => {
      return petTypes.includes(pet.petType);
    });
  }

  if (loading) return <Spinner />;

  return (
    <div className="pet-gallery">
      <div className="container">
        <div className="filter">
          <PetsFilter
            setPetTypes={setPetTypes}
            setGenders={setGenders}
            setSizes={setSizes}
            setLocations={setLocations}
          />
        </div>

        <div className="gallery">
          <PetsCards total={total}>
            {pets.length > 1 ? (
              pets?.map(pet => (
                <PetsCard
                  key={pet.id}
                  id={pet.id}
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
      </div>
    </div>
  );
}

export default PetsGallery;
