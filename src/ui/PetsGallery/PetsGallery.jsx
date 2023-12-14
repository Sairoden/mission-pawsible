// STYLES
import "./PetsGallery.scss";

// UI COMPONENTS
import { PetsFilter, PetsCards, PetsCard } from "../index";

function PetsGallery() {
  return (
    <div className="pets-gallery">
      <PetsFilter />

      <PetsCards total={57}>
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/resource.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
        <PetsCard
          image="/shitsu.png"
          title="MO502 - Poodle Tiny Yellow"
          gender="Male"
          date="Nov 12, 2023"
        />
      </PetsCards>
    </div>
  );
}

export default PetsGallery;
