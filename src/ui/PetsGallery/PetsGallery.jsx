// REACT & LIBRARIES
import { useState } from "react";

// STYLES
import "./PetsGallery.scss";

// UI COMPONENTS
import { PetsFilter, PetsCardContainer, PetsCard, Spinner } from "../index";

// UTILITIES
import { formatDate } from "../../utils";

function PetsGallery({ pets = [], loading, total = 0 }) {
  const [petTypes, setPetTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [locations, setLocations] = useState([]);

  if (petTypes.length > 0)
    pets = pets.filter(pet => petTypes.includes(pet.petType));

  if (genders.length > 0)
    pets = pets.filter(pet => genders.includes(pet.gender));

  if (sizes.length > 0) pets = pets.filter(pet => sizes.includes(pet.size));

  if (locations.length > 0) {
    // Check if both "Manila" and "Quezon" are in the locations array
    const includeBoth =
      locations.includes("Manila") && locations.includes("Quezon");

    pets = pets.filter(pet => {
      if (includeBoth) {
        return pet;
      } else {
        for (let location of locations) {
          if (location === "Manila" && !pet.location.includes("Quezon")) {
            return pet.location.includes("Manila");
          } else if (location === "Quezon") {
            return pet.location.includes("Quezon");
          }
        }
      }
    });
  }

  if (loading) return <Spinner />;

  return (
    <div className="pet-gallery margin-t spacing-t">
      <div className="container">
        <PetsFilter
          setPetTypes={setPetTypes}
          setGenders={setGenders}
          setSizes={setSizes}
          setLocations={setLocations}
        />

        <PetsCardContainer total={total}>
          {pets.length > 0 ? (
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
            <h3 className=" no-data">No pets currently 🐕</h3>
          )}
        </PetsCardContainer>
      </div>
    </div>
  );
}

export default PetsGallery;
