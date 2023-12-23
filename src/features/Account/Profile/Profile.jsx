// REACT & LIBRARIES
import { NavLink } from "react-router-dom";

// STYLES
import "./Profile.scss";

// UI COMPONENTS
import { Button, Spinner } from "../../../ui";

// HOOKS
import { useLogout, useGetCurrentUser } from "../../../hooks";

function Profile() {
  const { logout, isPending } = useLogout();
  const { user, isPending: isPending2 } = useGetCurrentUser();

  const { email } = user;
  const { address, avatar, contactNumber, firstName, lastName } =
    user.user_metadata || {};

  if (isPending || isPending2) return <Spinner />;

  return (
    <div className="profile-main-container">
      <div className="main-content">
        <div className="account-img">
          <img src={avatar} alt="profileIcon" className="profile-img" />
        </div>

        <div className="account-header">
          <h4 className="account-text">
            {firstName} {lastName}
          </h4>
        </div>
      </div>

      <div className="middle_container">
        <div className="middle-content">
          <div className="account-details">
            <div>
              <span className="account-span">EMAIL:</span>
            </div>

            <div>
              <span className="account_emailText">{email}</span>
            </div>
          </div>

          <div className="account-contact">
            <div>
              <span className="account-span">CONTACT:</span>
            </div>

            <div>
              <span className="account_emailText">{contactNumber}</span>
            </div>
          </div>

          <div className="account-address">
            <div>
              <span className="account-span">ADDRESS:</span>
            </div>

            <div>
              <span className="account_emailText">{address}</span>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <NavLink to="/account/update">
            <Button variation="primary" styles={{ padding: "2vh 3vw" }}>
              Update
            </Button>
          </NavLink>
          <Button
            variation="secondary"
            onClick={logout}
            styles={{ padding: "2vh 3vw" }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
