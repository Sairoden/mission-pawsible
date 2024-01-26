// STYLES
import "./RegisteredPet.scss";

// FEATURES COMPONENTS
import { RegisteredPetContainer } from "../../index";

// UI COMPONENTS
import { Spinner } from "../../../ui";

function RegisteredPet({ userPets = [] }) {
  if (!Array.isArray(userPets)) return <Spinner />;

  const lostPets = userPets?.filter(userPet => userPet.status === "Lost");
  const foundPets = userPets?.filter(userPet => userPet.status === "Found");

  return (
    <div>
      <div className="register_white_container ribbon">
        <RegisteredPetContainer title="REGISTERED LOST PET" pets={lostPets} />
        <RegisteredPetContainer title="REGISTERED FOUND PET" pets={foundPets} />
      </div>
    </div>
  );
}

export default RegisteredPet;
