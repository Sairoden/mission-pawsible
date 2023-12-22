// STYLES
import "./Account.scss";

// FEATURES COMPONENTS
import { RegisteredPet, Profile } from "../../index";

function Account() {
  return (
    <div className="profile-container">
      <Profile />
      <RegisteredPet />
    </div>
  );
}

export default Account;
