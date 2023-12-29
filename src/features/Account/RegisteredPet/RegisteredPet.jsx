// STYLES
import "./RegisteredPet.scss";

import { RegisteredPetContainer } from "../../index";

function RegisteredPet() {
  return (
    <div>
      <div className="register_white_container">
        <RegisteredPetContainer title="REGISTERED LOST PET" />
        <RegisteredPetContainer title="REGISTERED FOUND PET" />
      </div>
    </div>
  );
}

export default RegisteredPet;
