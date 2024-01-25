// STYLES
import "./Account.scss";

// FEATURES COMPONENTS
import { RegisteredPet, Profile } from "../../index";

// UI COMPONENTS
import { Spinner } from "../../../ui";

// HOOKS
import { useGetUserPets, useLogout, useGetCurrentUser } from "../../../hooks";

function Account() {
  const { user, isPending: isCurrentUserPending } = useGetCurrentUser();
  const { logout, isLogoutPending } = useLogout();
  const { userPets, isUserPetsPending } = useGetUserPets();

  if (isUserPetsPending || isLogoutPending || isCurrentUserPending || !userPets)
    return <Spinner />;

  return (
    <div className="profile-container">
      <Profile logout={logout} user={user} />
      <RegisteredPet userPets={userPets} />
    </div>
  );
}

export default Account;
