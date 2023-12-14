// STYLES
import "./LostPets.scss";

// UI COMPONENTS
import {
  PetsCards,
  PetsCard,
  PetsFilter,
  PetsBanner,
  Pagination,
} from "../../../ui";

function LostPets() {
  return (
    <div className="lost-pets-container">
      <PetsBanner
        image="/lost-pets-banner.png"
        title="Find Your Lost Pet"
        subtitle="We help lost pets and return them back to their owners."
        buttonText="POST YOUR PET"
      />

      <div className="pets-main-container">
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

      <Pagination total={80} />
    </div>
  );
}

export default LostPets;

<div
  style={{
    width: "100%",
    height: "100%",
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 13,
    paddingRight: 13,
    background: "#FF902A",
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
  }}
>
  <div
    style={{
      color: "#FDFDFD",
      fontSize: 18,
      fontFamily: "Poppins",
      fontWeight: "700",
      lineHeight: 24,
      wordWrap: "break-word",
    }}
  >
    1
  </div>
</div>;
